/*
 * Defect List V1.2.3 FINAL — PDF Share Fix (22 Oct 2026)
 * Share files ONLY, without a title, text, URL or blob: URL.
 * Prevent iOS from opening a blob: preview automatically at PDF creation.
 * Does not change report canvases, PDF layout, storage, projects or photos.
 * Include AFTER the app's original inline script and BEFORE </body>:
 * <script src="./defect-pdf-share-fix-20261022.js?v=1"></script>
 */
(function () {
  'use strict';

  const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

  // Native sharing must originate from an actual button press, and only the
  // PDF file is passed to the share sheet. Never pass a blob: URL or page URL.
  async function sharePdfFileOnly() {
    if (!lastPdf) {
      toast('请先生成 PDF');
      return false;
    }
    try {
      const name = lastPdfName || 'Defect_Report.pdf';
      const file = new File([lastPdf], name, {type: 'application/pdf'});
      if (typeof navigator.share !== 'function' ||
          typeof navigator.canShare !== 'function' ||
          !navigator.canShare({files: [file]})) {
        toast('此环境不支持直接分享文件。请先保存 PDF，再从「文件」App 分享。');
        return false;
      }
      // IMPORTANT: files ONLY. No title, text, url or object URL.
      await navigator.share({files: [file]});
      return true;
    } catch (e) {
      if (e && e.name === 'AbortError') return false;
      console.error('File-only PDF share failed', e);
      toast('分享失败，请先保存 PDF，再从「文件」App 分享。');
      return false;
    }
  }

  function showPdfActions(name, pageCount) {
    modal('PDF 已生成',
      `<div class="notice" style="overflow-wrap:anywhere">` +
        `<strong>${esc(name)}</strong>` +
        `<div class="muted" style="margin-top:6px">${pageCount} 页 · A4 PDF。` +
        `分享按钮仅发送 PDF 文件，不附带网页或 blob: 地址。</div>` +
      `</div>` +
      `<div class="dialog-actions">` +
        `<button class="btn secondary" type="button" id="pdfFixSave">保存 PDF</button>` +
        `<button class="btn" type="button" id="pdfFixShare">分享 PDF</button>` +
      `</div>`);

    $('pdfFixShare').onclick = async () => {
      const button = $('pdfFixShare');
      button.disabled = true;
      try {
        if (await sharePdfFileOnly()) closeModal();
      } finally {
        button.disabled = false;
      }
    };
    $('pdfFixSave').onclick = () => {
      downloadBlob(lastPdf, lastPdfName);
      closeModal();
      toast('已启动保存 PDF；如需分享，请从「文件」App 选择文件。');
    };
  }

  // Replace only the PDF export and share behavior. buildPdf(),
  // defectsPages(), photoPages() and all stored data remain untouched.
  pdfFromPages = async function (pages, name) {
    try {
      busy(true);
      await new Promise(resolve => setTimeout(resolve, 80));
      lastPdf = buildPdf(pages);
      lastPdfName = name;
      $('sharePDF').style.display = 'inline-flex';
      busy(false);
      if (isIOS) {
        // Do NOT trigger downloadBlob() here: on iPhone its blob: PDF
        // viewer can be mistakenly shared as an extra text URL.
        showPdfActions(name, pages.length);
      } else {
        // Preserve existing desktop download workflow.
        downloadBlob(lastPdf, name);
        toast(`已生成 PDF（${pages.length} 页）`);
      }
    } catch (e) {
      console.error('PDF generation failed', e);
      alert('PDF 生成失败：' + (e && e.message || e));
    } finally {
      busy(false);
    }
  };

  $('sharePDF').onclick = async () => { await sharePdfFileOnly(); };
})();
