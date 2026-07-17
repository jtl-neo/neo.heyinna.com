export interface Announcement {
    /** 公告的唯一識別碼 */
    id: string;
    /** 公告標題 */
    title: string;
    /** 公告內容段落 (支援多段落) */
    paragraphs: string[];
    /** 底部附註 (可選) */
    footerNote?: string;
    /** 公告類型: 'info' 資訊通知 | 'warning' 重要警告 | 'important' 重要聲明 */
    type: 'info' | 'warning' | 'important';
    /** 是否顯示此公告 */
    visible: boolean;
    /** 公告日期 (格式: YYYY-MM-DD) */
    date?: string;
}

/**
 * 公告設定
 * 
 * 在這裡新增、編輯或隱藏公告。
 * 將 visible 設為 false 即可隱藏公告而不需要刪除。
 * 
 * 範例:
 * ```ts
 * {
 *     id: 'my-announcement',
 *     title: '公告標題',
 *     paragraphs: ['第一段內容', '第二段內容'],
 *     footerNote: '附註文字 (可選)',
 *     type: 'info',       // 'info' | 'warning' | 'important'
 *     visible: true,      // 設為 false 隱藏
 *     date: '2026-03-03', // 日期 (可選)
 * }
 * ```
 */
export const announcements: Announcement[] = [

];
