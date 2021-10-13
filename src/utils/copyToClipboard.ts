// 使用BOM中接口 navigator.clipboard.writeText
// 将任何文本复制到剪贴板
export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
