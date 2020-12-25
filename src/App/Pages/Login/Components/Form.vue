<template>
  <form class="form auth__form">
    <h3 class="form__title">API-консолька</h3>      
    <TextInput 
      :label="'Логин'"
      :inputType="'text'"
      :inValid="fields.login.err"
      :value="fields.login.val"
      :getText="val => $on('get-text', getFieldVal({val, type: 'login'}))"
    />
    <TextInput 
      :label="'Сублогин'"
      :inputType="'text'"
      :inValid="fields.sublogin.err"
      :optionText="'Опционально'"
      :value="fields.sublogin.val"
      :getText="val => $on('get-text', getFieldVal({val, type: 'sublogin'}))"
    />
    <TextInput 
      :label="'Пароль'"
      :inputType="'text'"
      :inValid="fields.password.err"
      :value="fields.password.val"
      :getText="val => $on('get-text', getFieldVal({val, type: 'password'}))"
    />
    <Button />
  </form>
</template>

<script>
  import TextInput from '@/UI/TextInput'
  import Button from '@/UI/Button'
  import getModel from '@/Models/'
  import Validate from '@/utils/Validate'

  export default {
    data() {
      return {
        fields: {
          login: getModel('FormFields'),
          sublogin: getModel('FormFields'),
          password: getModel('FormFields')
        },
        isErr: false
      }
    },
    components: {TextInput, Button},
    methods: {
      getFieldVal (obj) {
        const {type, val, err} = Validate.isValidField(obj);
        let fields = {...this.fields};
        let isErr = false;
        fields[type] = {val, err};
        for(let field in fields) {
          if(fields[field].err) isErr = true;
        }
        // setState({fields, isErr});
      }
    }
  }
</script>