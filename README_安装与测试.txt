DEFECT LIST APP V1.1 — 独立测试版
日期: 2026-10-22

【不要覆盖旧版】
本 ZIP 为单独测试版。请先在新的 GitHub repository 部署，再测试手机。
此版本的数据格式未承诺兼容 V1.0 旧版本的本地存储；不要以新文件覆盖已使用中的旧版。

【核心功能】
1) 多个独立 Project：新增、切换、修改名称、删除（需确认）；每个项目的 Defects 与 Photos 完全分离。
2) Defect List：No. / Block / Lot No. / Defect Description / Date Check / Status / Date Completed / Remarks；同 Lot 支持多个独立 Defect。
3) 删除 14-Day Deadline、Owner、Incharge、Overdue；Description 栏加宽。
4) Photo Report：General / RFWI / Pressure Test，Before/After 多照片、时间、地点、说明；可填写测试前后压力、单位与测试时长。
5) 本机离线生成 PDF：Defect Summary A4 横向，Photo Report A4 直向，自动分页。PDF 由图片组成，因此文字不是可选取的矢量文字。
6) JSON 完整备份和恢复，包含照片。

【重要提醒】
默认 VM PHASE 2 内的 14 项数据是基于先前摘要整理的测试示例；请在正式使用前校对。
本 App 是离线本地存储，不会自动云端同步；清理 Safari 网站数据或换网址/手机可能丢失资料。请定期点 PDF / Backup → 备份全部 Projects。
在 GitHub Pages（HTTPS）打开并加入主屏幕，储存和离线能力才正常。单独用 Files 打开 HTML 不一定能保存资料。
尚未在真实 iPhone Safari/PWA 完成实机测试。

【在 GitHub Pages 测试】
1. 解压 ZIP，进入 Defect_List_V1_1 文件夹。
2. 新建测试用 repository，例如 defect-list-test（不要改原来的正式 App）。
3. 上传 index.html、manifest.webmanifest、sw.js、icon-180.png、icon-192.png、icon-512.png 到 repository 根目录。
4. GitHub Settings → Pages → Deploy from a branch → main / (root)。
5. Safari 打开新网址 → 分享 → 加入主屏幕。
6. 测试切换两个 Project、添加 Defect、添加 Before/After Photo、下载 PDF、导出 Backup。

【本次已测试】
- 页面按 iPhone 宽度 390px 模拟，布局和操作正常。
- 新增 Defect 正常；初始 14 项，Pending 1 / Completed 4。
- 新增 Project 后为独立空数据；同项目 PDF 导出正常。
- 横向 Defect PDF 为2页，照片报告 6 张分2页。
- 超长 Description 可跨页续写，无 JS 异常。
- 实机 Safari PDF 下载、WhatsApp 分享仍需您在手机验证。
