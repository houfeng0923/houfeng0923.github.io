

### MVI

Model-View-Intent (MVI) 是响应式、函数式的，并遵循了 MVC 的核心理念。在整个流程中 Intent 监听着用户的行为，Model 监听着 Intent，View 监听着 Model，而用户也监听着 View，因此它是响应式的。


添加用户的动作不应该影响到 View。

> 如果我们让 Views 支持 onClick={this.handleClick()}，这意味着 Views 不再是一个简单的从数字模型到用户心理模型的转换，因为我们还指定了用户操作的结果。为了保证 Cycle.js 应用中的所有部分都是响应式的，我们需要用 View 来简单地声明 Model 的视图展示。否则 View 将会变为一个主动性的组件。让 View 在这里只负责状态的视图展示职责是更有益的：这里遵循了单一职责概念并且对 UI 设计人员是友好的。它在概念上也与 MVC 中的原始视图一致：”…视图永远不应该知道用户的输入，例如鼠标、键盘的操作。“

> [Cycle.js - model-view-intent](http://cyclejs.cn/model-view-intent.html)