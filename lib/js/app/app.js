

Vue.use(VueMaterial.default)

var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ]
    },
    created: function () {
      // `this` указывает на экземпляр vm
      console.log('Первое значение todos: ' + this.todos[2].text)
    }
  })
  
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Привет, Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Привет, Vue!'
    }
  })

  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Привет'
    },
    computed: {
      // геттер вычисляемого значения
      reversedMessage: function () {
        // `this` указывает на экземпляр vm
        return this.message.split('').reverse().join('')
      }
    }
  })

  var demo = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: {
        // геттер:
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // сеттер:
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  })
  // 'Authorization':'Basic YWx4OjEyMw=='
  const client = axios.create({
    headers: {
    
    'Content-Type': 'application/json',
    
    },
    auth:{
      username: 'alx',
      password: '123'
    }
    // crossDomain: true, 
    // withCredentials: true,
    
  });
  const proxy = "https://cors-anywhere.herokuapp.com/"; // new line

  var testApi = new Vue({
    el:'#testApi',
    data:{
      info:'{}',
    },
    created: function(){
      client.get("https://cors-anywhere.herokuapp.com/"+'http://api.domstor.ru/rt/all.json').then(responce=> {this.info = responce.data})
          .catch(function (error){
            console.log('Error on Authentication');
          });
       }
  })

