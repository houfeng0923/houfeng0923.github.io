## test

![](https://www.testwo.com/attachments/13831/1523929648725.jpg)

### Unit Tests

验证一个独立的代码单元是否按照期望的方式运行. (开发者视角,开发者参与)

BDD 与 TDD

#### 工具相关:

Test Framework:
- qunit,
- mocha,
- jest

Assert:
- chai,
- should,
- jasmine ...

覆盖率:
- istanbul

### Integration Tests

黑盒或白盒

关注程序模块,不同模块集成后功能是否符合预期 (开发视角)

### Functional Tests (e2e)

黑盒

在浏览器模拟器中以用户视角来验证期望的场景是否发生. (用户视角, 开发者/测试人员/产品 参与)

涉及到 ui 和交互逻辑, 自动化方案较复杂.

类比 [系统测试](https://www.testwo.com/article/1248), 系统测试还包含非功能性需求,等等


e2e Test Runner / solution:

- puppeteer . not webdriver api. only for chrome ,but more strong .
- ❌phantomjs(deprecated)+casperjs
- ❌Karma (改进版 JsTestDriver), like totoro only support browser launchers. but [protractor](https://github.com/angular/protractor) based on **webdriverjs**(used selenium) for angular app
- ❌ [cypress](https://www.cypress.io/) inject script mode, but only support webkit now
- ❌ testem (ember used)
- ❌ [segmentio/nightmare](https://github.com/segmentio/nightmare) only for webkit

- ✅[Selenium - Web Browser Automation](https://docs.seleniumhq.org/)
- ✅nightwatch, based on webdriver / selenium server, 可以考虑.
- ✅[testCafe] (inject script mode) 可以考虑!
- ✅[UI Recorder](https://uirecorder.com/) ali 开源 ui 测试方案! 成本可控的 ui 录制方案
- ✅[webdriver.io](https://webdriver.io/docs/boilerplate.html)
- [CodeceptJS](https://codecept.io/) 多方案的高阶封装
- [smashtest!!](https://smashtest.io/)  awesome test tool!

其他相关:

-  cucumber 一个能够理解用普通语言 描述的测试用例的支持行为驱动开发（BDD）的自动化测试工具
  相关类似工具 [哪个才是最适合你的 Web UI 自动化测试框架](https://zhuanlan.zhihu.com/p/30385812)
  基于此的商用解决方案: [CukeTest](http://cuketest.com/)

- [Polly.JS](https://netflix.github.io/pollyjs/#/README)

### User Acceptance Tests (UAT 验收测试)

在真实的浏览器中以用户视角验证期望的场景是否发生。(用户代表/测试团队 验证).
一般情况,代码是处于冻结状态,才提交 uat 测试; 敏捷流程中,可能会交叉在开发流程中.


开发者关注测试范围: 单元测试和功能测试及其自动化方案.
测试角色关注 uat 测试及自动化方案(黑盒)

其他
----

### 兼容性测试


### 冒烟测试

当你部署了一个新的发布到生产环境后，很重要的一点就是确定它是否正常工作。你不希望你的用户比你还先发现错误 —— 因为这会赶走用户！
维护一份自动化的功能测试 - 比方说烟雾测试，是很重要的。测试你应用中所有的重要功能。那些用户在日常操作中会遇到的请求。
冒烟测试不是功能测试的唯一作用， 但是在我看来，却是最有意义的.

### 性能测试 (基准测试)

benchmark 或 jsperf


### 回归测试



## 相关概念

###  Fixtures

建立一个固定/已知的环境状态以确保 测试可重复并且按照预期方式运行.

mock

[Sinon.JS - Standalone test fakes, spies, stubs and mocks for JavaScript. Works with any unit testing framework.](https://sinonjs.org/)

### BDD

BDD 最重要的一个特性是：由非开发人员编写测试用例，而这些测试用例是使用自然语言编写的 DSL（领域特定语言）。


## references

- [04-FunctionalTests - Codeception - Documentation](https://codeception.com/docs/04-FunctionalTests)
- [Web应用E2E测试框架 | 瘦人说](https://slender-man.github.io/2013/06/30/2013-06-30-e2e-testing-of-web-application/)
- [**An Overview of JavaScript Testing in 2019**](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a)
- [E2E Testing with Protractor , Cucumber using TypeScript!](https://medium.com/@igniteram/e2e-testing-with-protractor-cucumber-using-typescript-564575814e4a)
- [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)
- [JavaScript 测试︰ 单元 vs 功能 vs 集成测试 - 前端 - 掘金](https://juejin.im/entry/584ab2dc128fe1006c7cdc11)
- [系统测试VS端到端测试：哪一个更好？](https://www.testwo.com/article/1248)
- [使用Nightwatch进行E2E测试中文教程](https://www.jianshu.com/p/936bee074b66)
- [End-to-end Tests that Don’t Suck with Puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/)
- [why-end-to-end-testing-is-important-for-your-team](https://www.freecodecamp.org/news/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504/)
- [karma 测试框架的前世今生](http://taobaofed.org/blog/2016/01/08/karma-origin/)
- [dwyl/learn-nightwatch](https://github.com/dwyl/learn-nightwatch)
- [Web UI 自动化测试技术选型!](https://segmentfault.com/a/1190000016012033)
- [哪个才是最适合你的 Web UI 自动化测试框架](https://zhuanlan.zhihu.com/p/30385812)