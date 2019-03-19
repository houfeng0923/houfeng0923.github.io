## 状态管理

### 传统

各级 component/role/scope 实例化 state/model 维护;

维护 domain model 对象 (rich model)

案例:

- ember object (computed)
    配合 computed props 适合维护复杂领域模型对象

### 集中状态管理

root state , 统一维护

sub state -> model (list[poor model / simple vo])

案例:

- redux
    state 中维护基础数据, 衍生属性不在 state 中维护;
    一种是

### 集中 model


案例:

- ember service + object
- mobx
- react  axiom (https://medium.com/@wrgoto/mobx-decorates-classes-objects-arrays-to-make-them-observable-and-computes-derived-values-from-2144e62b460f)