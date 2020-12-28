<template>
<section class="auth">
  <div class="auth__container">
    <Logo />
    <Form 
      :isLoad="isLoad"
      :errMessage="errMessage"
      @submit-auth-form="onSubmitForm"
    />
    <a href="https://github.com/chetvertkoff/sendsay" class="link auth__link">@chetvertkoff</a>
  </div>
</section>
</template>

<script>
  import Logo from '@/UI/Logo'
  import Form from './Components/Form'
  import getModel from '@/Models'
  import http from '@/utils/http'

  export default {
    components: {Logo, Form},
    data(){
      return {
        isLoad: false,
        errMessage: ""
      }
    },
    methods: {
      onSubmitForm(formFields) {
        const fields = getModel('AuthFields', formFields);

        Promise.resolve(this.reqLogin(fields))
        .then(res=>{
          if(res.explain){
            const {id, explain} = res;

            this.errMessage = JSON.stringify({id, explain});
            return;
          }
          if(!this.errMessage) this.errMessage = "";
          // history.push('/');  
        })
      },
      async reqLogin(fields) {
        const {login, sublogin} = fields;
        const userInfo = JSON.stringify({login, sublogin});
        
        this.isLoad = true;
        const res = await http(fields);
        this.isLoad = false;
        if(!res.session) return res;
        Cookies.set('sendsay_session', res.session, { expires: 7 });
        localStorage.setItem('user_info', userInfo);
        
        return res;
      }
    }
  }
</script>