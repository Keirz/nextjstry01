
import React, { useState, useEffect, useRef} from 'react';
import FormInput from '../FormInput';
import axios from 'axios';

export const FormCadastro= (props) => {

  
  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  };
  const [values, setValues] = useState(
    {
      nome: "", 
      telefone: "", 
      rg:"", 
      cpf:"", 
      email:"", 
      login:"",
      senha: "",
      confirmsenha: "" 
    }
  );
  
  const tipoInputs =[

    {
      id:1,
      name: "nome",
      type: "text",
      label: "Nome *",
      placeholder: "",
      pattern: "^[A-Za-z]{3,16}$",
      classtype:  "form-control",
      classrow: "col-sm-6",
      msgnerro: "Mínimo de 3 caracteres, apenas letras.",
      required: true
    },  
    {
      id:2,
      name: "nomeSocial",
      type: "text",
      label: "Nome Social/Apelido",
      classtype:  "form-control",
      classrow: "col-sm-6",
      placeholder: "",
      msgnerro: '',
      required: false
    }, 
    {
      id:3,
      name: "rg",
      type: "text",
      label: "RG *",
      classtype:  "form-control",
      classrow: "col-sm-3",
      placeholder: "",
      pattern: "^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$",
      msgnerro: 'Digite um RG VÁLIDO. Apenas números.',
      required: true
    },
    {
      id:4,
      name: "cpf",
      type: "text",
      label: "CPF *",
      classtype:  "form-control",
      classrow: "col-sm-3",
      pattern: "^\d{3}).?(\d{3}).?(\d{3})-?(\d{2}$",
      placeholder: "",
      msgnerro: 'Digite no mínimo 11 números(sem letras), com ou sem os pontos e hífens!',
      required: true
    },
    {
      id:5,
      name: "emissor",
      type: "text",
      label: "Emissor",
      classtype:  "form-control",
      classrow: "col-sm-3",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:6,
      name: "uf",
      type: "select",
      label: "UF",
      classtype:  "form-control",
      classrow: "col-sm-1 form-check",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:7,
      name: "dataemissor",
      type: "date",
      label: "Data de Emissão",
      classtype:  "form-control",
      classrow: "col-sm-2",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:8,
      name: "cargo",
      type: "select",
      label: "Cargo",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:9,
      name: "empresa",
      type: "text",
      label: "Empresa",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:10,
      name: "vinculo",
      type: "text",
      label: "Vínculo",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:11,
      name: "cns",
      type: "text",
      label: "CNS",
      classtype:  "form-control",
      classrow: "col-sm-5",
      placeholder: "",
      msgnerro: '',
      required: false
    },
    {
      id:12,
      name: "telefone",
      type: "tel",
      label: "Telefone *",
      classtype:  "form-control",
      classrow: "col-sm-3",
      pattern: "\(\d{2}\)\s*\d{5}-\d{4}",
     
      placeholder: "",
      msgnerro: 'Digite apenas números, com o DDD, no mínimo 11.',
      required: true
    },
    {
      id:13,
      name: "email",
      type: "email",
      label: "Email *",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      msgnerro: 'Digite um e-mail válido.',
      required: true
    },
    {
      id:15,
      name: "pacienterel",
      type: "text",
      label: "Paciente Relacionado",
      classtype:  "form-control",
      classrow: "col-sm-12",
      placeholder: "",
      msgnerro: '',
      required: false
    }
    ];

  const tipoInputsUser =[
    
    {
      id:1,
      name: "user",
      type: "checkbox",
      label: "Usuário?",
      classtype:  "form-check",
      classrow: "col-sm-12",
      placeholder: "",
      msgnerro: "",
      required: false
    },  
    {
      id:2,
      name: "delegation",
      type: "checkbox",
      classtype:  "form-check",
      classrow: "col-sm-2",
      label: "Permissão para delegar Poder?",
      placeholder: "",
      required: false
    },  
    {
      id:3,
      name: "subscriber",
      type: "checkbox",
      classtype:  "form-check",
      classrow: "col-sm-10",
      label: "Permissão de Assinatura?",
      required: false
    },  
    {
      id:4,
      name: "Login",
      type: "text",
      label: "Login *",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      pattern: "^{4,15}$",
      msgnerro: "Mínimo de 4 caracteres",
      required: true
    },  
    {
      id:5,
      name: "senha",
      type: "password",
      label: "Senha *",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$",
      msgnerro: "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'",
      required: true
    },     {
      id:6,
      name: "confirmsenha",
      type: "password",
      label: "Confirme a Senha *",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      pattern: values.senha,
      msgnerro: "Mínimo de 3 caracteres, apenas letras",
      required: true
    },   {
      id:8,
      name: "conselho",
      type: "select",
      label: "Conselho",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "Selecione",
      required: false
    },  {
      id:9,
      name: "ufconselho",
      type: "select",
      label: "UF",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "Selecione",
      required: false
    },  {
      id:10,
      name: "numeroconselho",
      type: "text",
      label: "Número ",
      classtype:  "form-control",
      classrow: "col-sm-4",
      placeholder: "",
      pattern: "/^\d*$/",
      required: false
    }, {
      id:11,
      name: "certidigital",
      type: "checkbox",
      classtype:  "form-check",
      classrow: "col-sm-2",
      label: "Login exclusivo com Certificado Digital?",
      placeholder: "",
      required: false
    },{
      id:12,
      name: "passreset",
      type: "checkbox",
      classtype:  "form-check",
      classrow: "col-sm-10",
      label: "Resetar a senha no próximo Acesso?",
      placeholder: "",
      required: false
    },{
      id:13,
      name: "estudante",
      type: "checkbox",
      label: "Estudante?",
      classtype:  "form-check",
      classrow: "col-sm-3",
      placeholder: "",
      required: false
    },{
      id:14,
      name: "preceptor",
      type: "checkbox",
      label: "Preceptor?",
      classtype:  "form-check",
      classrow: "col-sm-3",
      placeholder: "",
      required: false
    },{
      id:15,
      name: "toten",
      type: "checkbox",
      label: "Acesso ao toten?",
      classtype:  "form-check",
      classrow: "col-sm-3",
      placeholder: "",
      required: false
    },{
      id:16,
      name: "admincheck",
      type: "checkbox",
      label: "Admnistrador?",
      classtype:  "form-check",
      classrow: "col-sm-12",
      placeholder: "",
      required: false
    },
  ];

  const [nome, setNome] =useState();
  const [telefone, setTelefone] = useState();
  const [rg, setRg] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  

  const nomeRef = useRef();


  const addNewUser = (e) => {
    e.preventDefault();
    props.addHandler(values)
  };

  const tester = (e) =>{
    e.preventDefault();
    addNewUser(values);
    console.log(values)
  };
  

  return (
  
    <div className="container-fluid mainbg">
      
      <form onSubmit={addNewUser} className='formmain card needs-validation' noValidate>
        <div className="container-fluid doisForms">
          <div className="formtela1 card-body">
            <header className="addHeader card-title">
              <h4>Dados de Funcionário</h4>
            </header>

            <div className="container-fluid formtela card">
              <div className="container-fluid formtela">
                <div className="row">
                  {tipoInputs.map((input) => (
                  <div className={input.classrow} key={input.id}>
                  <FormInput key={input.id} {...input} value = {values[input.name]} onChange={onChange} 
                  className={input.classtype} id={values[input.name]} /></div>
            ))}
            </div>
            </div>
            </div>
      </div>
       
        <div className="formtela1 container-fluid card-body">
            <header className="addHeader card-title">
              <h4>Dados de Usuário</h4>
            </header>

            <div className="container-fluid formtela card">
              <div className="container-fluid formtela">
              
                <div className="row">
                 {tipoInputsUser.map((input) =>(
                  <div className={input.classrow}   key={input.id}>
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}  className={input.classtype} />
                  </div>
                 ))}
                
              </div>
            </div>
          </div>
        </div>
        <div className="footer card btnform fixed-bottom card-body">
          <div className='container-fluid buttonrow'>
          <button
            type="submit"
            className="btn btngravar mb-3"
          > Gravar </button>
      
          </div>
        
     
      </div>
          </div>


  
      </form>

    </div>
    
  );

}


export default FormCadastro;