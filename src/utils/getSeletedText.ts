// 使用JS内置的 getSelectionproperty 获取用户选择的文本
export const getSelectedText = () => window?.getSelection()?.toString();
