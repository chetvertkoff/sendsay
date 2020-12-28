<template>
  <form class="form auth__form">
    <h3 class="form__title">API-консолька</h3>      
    <TextInput 
      :label="'Логин'"
      :inputType="'text'"
      :inValid="fields.login.err"
      :value="fields.login.val"
      @get-text="val => getFieldVal({val, type: 'login'})"
    />
    <TextInput 
      :label="'Сублогин'"
      :inputType="'text'"
      :inValid="fields.sublogin.err"
      :optionText="'Опционально'"
      :value="fields.sublogin.val"
      @get-text="val => getFieldVal({val, type: 'sublogin'})"
    />
    <TextInput 
      :label="'Пароль'"
      :inputType="'text'"
      :inValid="fields.password.err"
      :value="fields.password.val"
      @get-text="val => getFieldVal({val, type: 'password'})"
    />
    <Button 
      :disabled="isErr"
      :title="'Войти'" 
      :classes="['form__button']"
      @on-click="getFormData"
    />
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
      getFieldVal(obj) {
        const {type, val, err} = Validate.isValidField(obj);
        let fields = {...this.fields};
        let isErr = false;

        fields[type] = {val, err};
        for(let field in fields) {
          if(fields[field].err) isErr = true;
        }

        this.fields = fields;
        this.isErr = isErr;      
      },
      getFormData(event) {
        event.preventDefault();
        const {fields, isErr} = Validate.isValidForm({fields: this.fields, isErr: this.isErr});
        
        if(!isErr) {
          this.$emit('submit-auth-form', fields);
        }

        this.fields = fields;
        this.isErr = isErr;  
      }
    }
  }
</script>