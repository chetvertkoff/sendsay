<template>
<section class="auth">
  <div class="auth__container">
    <Logo />
    <Form 
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

  export default {
    components: {Logo, Form},
    methods: {
      onSubmitForm(formFields) {
        const fields = getModel('AuthFields', formFields);

        Promise.resolve(this.reqLogin(fields))
        .then(res=>{

          // if(res.explain){
          //   const {id, explain} = res;
          //   setErrMessage(JSON.stringify({id, explain}));
          //   return;
          // }
          // setErrMessage('');
          // history.push('/');  
        })
      },
      async reqLogin(fields){
        // const {login, sublogin} = fields;
        // const userInfo = JSON.stringify({login, sublogin});
        // setLoading(true);
        // const res = await request(fields);
        // setLoading(false);
        // if(!res.session) return res;
        // Cookies.set('sendsay_session', res.session, { expires: 7 });
        // localStorage.setItem('user_info', userInfo);
        
        // return res;
      }
    }
  }
</script>