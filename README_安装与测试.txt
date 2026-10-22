Defect List App V1.2 · UI 优化测试版

一、最安全更新方式
1. 先在目前手机 V1.1 的 PDF / Backup 页点「备份全部 Projects」。
2. 在已经使用的同一个 GitHub Pages 测试仓库中，用 V1.2 的 index.html / sw.js / manifest.webmanifest / 三张 icon 替换原有文件，保持原网址和路径。
3. 等 GitHub Pages 更新后，用 Safari 打开原 App 链接并刷新，再打开主屏幕 App，确认页头出现 V1.2 TEST。
4. V1.2 仍然沿用 V1.1 相同的 IndexedDB 与储存名称，因此在原网址更新通常可延续原资料。但 iOS 可能因重装、切换域名/路径、清除网站数据导致资料不能自动互通，所以务必事先备份。
5. 如资料未自动出现，可用 PDF / Backup 里的 Restore 导入刚才的 JSON 备份。Restore 会替换当前 App 全部数据，务必留好原档。

二、此次仅优化手机 Defect List 操作：
- Lot / Block 分层显示、更清楚的 Description 与 Remarks。
- 五个可点状态数字：Total / Pending / Progress / Done / Not Set。
- 搜索、状态筛选、排序、清除筛选。
- 每张卡片底部直接选状态；选 Completed 时自动填当天完成日期，转回其他状态则清空完成日期。
- 「编辑详情」、＋同 Lot 一键继续新增、更多菜单可删除。
- 手机右下角有 Add Defect 悬浮按钮。
- 保留工程隔离、Photo Reports、A4 横向 Defect PDF、相片 PDF、离线、备份/恢复。
- Photo PDF 自动对比：Before 1 张 + After 1 张，在同一张 A4 Portrait 左右并排；多张按对应序号成对排列，空间不足自动分页。
- 没有 14-Day Deadline / Owner / Incharge / Overdue。

注意：这是独立测试版，未部署到你的 GitHub，也未覆盖你手机内现有版本。
