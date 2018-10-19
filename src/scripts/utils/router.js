function Router() {
    this.routes = {}
    this.currentHash = ''
  }
  
  var noop = function () {}
  
  // 路由注册
  Router.prototype.route = function (hash, cb) {
    this.currentHash = hash
    this.routes[this.currentHash] = cb || noop
  }
  
  // 路由刷新
  Router.prototype.refresh = function () {
    let hash = location.hash || '#position'
    this.currentHash = hash
    this.routes[this.currentHash]()
    this.switchTabbar()
  }
  
  // tabbar switch
  Router.prototype.switchTabbar = function () {
    let hashs = ['#position', '#movie',"#cinema","#details","#coming"]
    let index = hashs.indexOf(this.currentHash)
    if(index == 1){
      $('.movies_nav>a')
        .eq(0)
        .addClass('change')
        .siblings()
        .removeClass('change')
    }

    if(index == 4){
      $('.movies_nav>a')
        .eq(1)
        .addClass('change')
        .siblings()
        .removeClass('change')
    }

  }
  
  // 路由切换监听
  Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this))
    window.addEventListener('hashchange', this.refresh.bind(this))
  }
  
  export default Router