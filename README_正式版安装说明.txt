DEFECT LIST — V1.2.3 FINAL（固定正式版）
====================================

本次固定范围：
- 保留已测试通过的 V1.2.3 Defect List 界面及所有工程项目隔离功能。
- 保留已确认的 V1.2.2 Photo Report PDF 排版。Before / After 左右并排，照片较小，工程文字优先。
- 将显示版本改为 V1.2.3 FINAL，并加入已选定的深蓝银白色房屋／清单／水管 Logo。
- 完全保留原有 IndexedDB 数据库名 defect-list-store-v1-1 和储存键 defect-list-test-v1-1。
- 保留 Backup、Restore、多工程、Defect PDF 和 Photo PDF 功能。

更新前重要提醒：
1. 打开当前 V1.2.3 TEST 的「PDF / Backup」>「备份全部 Projects」。
2. 把 JSON 备份储存到 iPhone「文件」App 或 iCloud Drive，确认能找到。
3. 绝对不要先卸载／删除旧手机 App，也不要清除 Safari 网站数据。

在原 GitHub Pages 测试仓库替换成固定正式版：
1. 解压本 ZIP。
2. 将里面的 index.html、sw.js、manifest.webmanifest、所有 icon-*.png 放在仓库根目录（和旧版 index.html 同一层）。
3. GitHub 上传完成后点 Commit changes。不要把整个文件夹放在原 index.html 旁。
4. 用原网址刷新已安装的 App，核对顶部显示 V1.2.3 FINAL；必要时先用 Safari 打开原网址刷新。
5. 检查原有 Projects／Defects／Photo Reports 是否仍在，并生成一张 PDF 测试。

注意：
- 此包不会主动清空或迁移本地数据。同一 iPhone、同一 GitHub Pages 地址、同一网页储存空间通常可继续读取原资料。
- iOS 主屏幕已安装的 PWA 图标可能被系统缓存而暂时仍是旧图标；新图标文件已加入正式包。先验证资料备份可恢复，再考虑重新加入主屏幕；不要为换图标而直接卸载旧 App。
- 如原本只是 Safari 页面而不是主屏幕 App，请在 Safari 分享菜单中选择「加入主屏幕」。
- 如换了 GitHub Pages 地址／新 iPhone／重新安装 App，可能需要使用 JSON Restore。

此版本为固定正式版，不更改现有数据结构或 PDF 样式。
