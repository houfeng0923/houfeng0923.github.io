
let matcher = new LoopConfigMatcher();

matcher.add('ticks/{symbolId}', {
  url: '/rest/ticks/{symbolId}'
});

let config = matcher.parse('ticks/1');

// / --

const PARAM_REG = /\{([^\}]*)\}/g;

class LoopConfigMatcher {
  constructor() {
    this.configs = {};
    this.compiled = {};
  }

  add(key, config) {
    if (!this.configs[key]) {
      this.configs[key] = config;
    }
    if (!this.compiled[key]) {
      this.compiled[key] = this.compile(key);
    }
  }

  compile(key) {
    let params = [];
    let segments = [];
    let exp = key.replace(PARAM_REG, function(m, $1) {
      segments.push(m);
      params.push($1);
      return '(.*)';
    });
    let pattern = new RegExp(exp);
    if (segments.length === 0) {
      return null;
    }
    let transform = (config, match) => {
      let url = config.url;
      for(let i = 0; i < match.length; i++) {
        url = url.replace(segments[i], match[i]);
      }
      config.url = url;
    };
    return { pattern, params, transform };
  }

  parse(event) {
    let config = this.configs[event];
    if (config) {
      return config;
    }
    let keys = Object.keys(this.compiled);
    for (let i = 0; i < keys.length; i++) {
      let result = this.compiled[keys[i]];
      if (result) {
        let match = event.match(result.pattern);
        if (match) {
          let config = clone(this.configs[keys[i]]);
          result.transform(config, match);
          return config;
        }
      }
    }
  }

}
