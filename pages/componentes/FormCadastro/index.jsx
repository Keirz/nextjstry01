
import React, { useState, useEffect, useRef} from 'react';
import FormInput from '../FormInput';
import axios from 'axios';

export const FormCadastro= (props) => {

  const [valores, setValores] = useState(
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
  const onChange = (event) =>{
   
    setValores({...valores, [event.target.name]: event.target.value})
  };
 
  
  const nomeRef = useRef();
  const telefoneRef = useRef();
  const rgRef = useRef();
  const cpfRef = useRef();
  const emailRef = useRef();
  const loginRef = useRef();
  const senhaRef = useRef();

  
  function mascaraNome(e){
    e.target.value = e.target.value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
    
  };
  function mascaraRg(e){
    e.target.value = e.target.value.replace(/\D/g, '')
    .replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")
  };
  function mascaraCpf(e){
    e.target.value = e.target.value.replace(/\D/g, '')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
  };
  function mascaraTel(e) {
      e.target.value = e.target.value.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
  };
  function mascaraEmail(e){
    e.target.value = e.target.value.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  }
  function mascaraLogin(e){
    e.target.value = e.target.value.replace()
  }
  function mascaraSenha(e){
    e.target.value =e.target.value.replace()
  }
 

  useEffect(() => {
  
    if(nomeRef && nomeRef.current){
      nomeRef.current.addEventListener('input', mascaraNome, false);
    }
    if (telefoneRef && telefoneRef.current) {
  
        telefoneRef.current.addEventListener('input', mascaraTel, false);
    }
    if(rgRef && rgRef.current){
      rgRef.current.addEventListener('input', mascaraRg, false );
    }
    if(cpfRef && cpfRef.current){
      cpfRef.current.addEventListener('input', mascaraCpf, false);
    }
    if(emailRef && emailRef.current){
      emailRef.current.addEventListener('input', mascaraEmail, false);
    }
    if(loginRef && loginRef.current){
      loginRef.current.addEventListener('input', mascaraLogin, false);
    }
    if(senhaRef && senhaRef.current){
      senhaRef.current.addEventListener('input', mascaraSenha, false);
    }
    
  }, [valores]);
  

  const addNewUser = (e) => {
    e.preventDefault();
    props.addHandler(valores)
  };

  const tester = (e) =>{
    e.preventDefault();
    addNewUser(valores);
    console.log(valores)
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
                  <div className="form-group mb-3">
                      <label htmlFor="nome" className="labelInput">
                        Nome *
                      </label>
                      <div className="input-group ">
                        <input
                          className="form-control input"
                          type="text" placeholder="" required minLength="3" pattern='^[a-zA-Z]+$'  
                          title='Mínimo de 3 caracteres, apenas letras' id='nome' name='nome' 
                          ref={nomeRef}
                          value={valores.nome || ''} 
                          onChange={onChange}
                        />
                        <div className='invalid-feedback'>
                        Favor inserir o Nome com apenas Letras.
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="funcNSocial" className="labelInput">
                        Nome Social / Apelido
                      </label>
                      <div className="input-group mb-3">
                        <input
                          name="funcNSocial"
                          id="funcNSocial"
                          className="form-control"
                        
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 form-group">
                      <label htmlFor="rg" className="labelInput">
                        RG *
                      </label>
                      <div className="input-group mb-3">
                        <input
                          name="rg"
                          className="form-control" required minLength='9' maxLength='12' 
                          pattern='(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)'
                          title='Digite um RG VÁLIDO. Apenas números.'
                          ref={rgRef}
                          id='rg' value={valores.rg || ''} onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 form-group">
                      <label htmlFor="cpf" className="labelInput">
                        CPF *
                      </label>
                      <div className="input-group mb-3">
                        <input
                          name="cpf"
                          id="cpf"
                          className="form-control" required minLength="11" maxLength="15" 
                          pattern='(^\d{3}).?(\d{3}).?(\d{3})-?(\d{2}$)'
                          title='Digite no mínimo 11 números(sem letras), com ou sem os pontos e hífens!'
                          ref={cpfRef}
                          value={valores.cpf || ''} onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 form-group">
                      <label htmlFor="funcEmissor" className="labelInput">
                        Emissor
                      </label>
                      <div className="input-group mb-3">
                        <input
                          name="funcEmissor"
                          id="funcEmissor"
                          className="form-control"
                    
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-1 form-group">
                      <label htmlFor="funcEmissorUF" className="labelInput">
                        UF
                      </label>
                      <div className="input-group mb-3">
                        <select
                          id="funcEmissorUF"
                          placeholder="-"
                          name="funcEmissorUF"
                          className="form-control"
                        >
                          <option></option>
                          <option value="BA">BA</option>
                          <option value="SP">SP</option>
                          <option value="RE">RE</option>
                          <option value="MG">MG</option>
                          <option value="PE">PE</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2 form-group">
                      <label htmlFor="funcDateEmit" className="labelInput">
                        Data de Emissão
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="date"
                          placeholder=""
                          id="funcDateEmit"
                          className="form-control"
                          name="funcDateEmit"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 my-1 form-group">
                      <label htmlFor="funcCargo">Cargo *</label>
                      <div className="input-group mb-3">
                        <select
                          id="funcCargo"
                          className="form-control"
                          placeholder="Selecione"
                          name="funcCargo"
                        >
                          <option></option>
                          <option value="Estudante">Estudante</option>
                          <option value="Administrador">Administrador</option>
                          <option value="Técnico">Técnico</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4 my-1 form-group">
                      <label htmlFor="funcEmpresa">Empresa *</label>
                      <div className="input-group mb-3">
                        <select
                          id="funcEmpresa"
                          className="form-control"
                          placeholder="Selecione"
                          name="funcEmpresa"
                        >
                          <option></option>
                          <option value="SUS">SUS</option>
                          <option value="SMED">SMED</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4 my-1 form-group">
                      <label htmlFor="funcVinculo">Vínculo *</label>
                      <div className="input-group mb-3">
                        <select
                          id="funcVinculo"
                          className="form-control"
                          placeholder="Selecione"
                          name="funcVinculo"
                        >
                          <option></option>
                          <option value="Estágio">Estágio</option>
                          <option value="CTPS">CTPS</option>
                          <option value="PJ">PJ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5 my-1 form-group">
                      <label htmlFor="funcCNS" className="labelInput">
                        CNS
                      </label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control"
                          id="funcCNS"
                          name="funcCNS"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 my-1 form-group">
                      <label htmlFor="telefone" className="labelInput">
                        Telefone *
                      </label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control"
                          id="telefone"
                          name="telefone" required minLength='11' maxLength='15'
                          /* pattern='(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)' */
                          title='Digite apenas números, com o DDD, no mínimo 11.' 
                          ref={telefoneRef}
                          value={valores.telefone || ''} onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 my-1 form-group">
                      <label htmlFor="funcEmail" className="labelInput">
                        E-mail *
                      </label>
                      <div className="input-group mb-3">
                        <input
                          id='email'
                          name='email'
                          className="form-control"
                          type="email"  required 
                          title='Digite um e-mail válido.'
                          ref={emailRef}
                          value={valores.email || ''} onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 my-1 form-group">
                      <label htmlFor="formInputPaciente" className="labelInput">
                        Paciente Relacionado
                      </label>
                      <div className="input-group mb-3">
                        <input
                          id="formInputPaciente"
                          name="formInputPaciente"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className="formtela1 card-body">
                <header className="addHeader card-title">
                  <h4>Dados de Usuário</h4>
                </header>
                <div className="container-fluid formtela card">
                  <div className="container-fluid formtela">
                    <div className="row">
                      <div className="col-sm-1 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcUserCheck"
                            className="labelInput"
                            title="Usuário?"
                          >
                            Usuário?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcUserCheck"
                              id="funcUserCheck"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcPowerCheck"
                            className="labelInput"
                            title="Permissão para delegar Poder?"
                          >
                            Permissão para delegar Poder?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcPowerCheck"
                              id="funcPowerCheck"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcSubscribe"
                            className="labelInput"
                            title="Permissão de Assinatura?"
                          >
                            Permissão de Assinatura?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcSubscribe"
                              id="funcSubscribe"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="login" className="labelInput">
                          Login *
                        </label>
                        <div className="input-group mb-3">
                          <input
                            name="login"
                            id="login"
                            className="form-control" required
                            type="text" minLength='5' maxLength='16'
                            title='Digite o login, entre 3 e 15 caracteres com letras, números, underline e traço'
                            ref={loginRef}
                            value={valores.login || ''} onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="senha" className="labelInput">
                          Senha *
                        </label>
                        <div className="input-group mb-3">
                          <input
                            name="senha"
                            id="senha"
                            className="form-control"
                            type="password" required minLength='6'
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
                            title='A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
                            ref={senhaRef}
                            value={valores.senha || ''} onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="funcPassword" className="labelInput">
                          Confirme a Senha
                        </label>
                        <div className="input-group mb-3">
                          <input
                            name="funcPassword"
                            id="funcPassword"
                            className="form-control"
                            type="password"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="funcConselho">Conselho *</label>
                        <div className="input-group mb-3">
                          <select
                            id="funcConselho"
                            className="form-control"
                            placeholder="Selecione"
                            name="funcConselho"
                          >
                            <option></option>
                            <option value="Estudante">Estudante</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Técnico">Técnico</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="funcConselhoUF">UF *</label>
                        <div className="input-group mb-3">
                          <select
                            id="funcConselhoUF"
                            className="form-control"
                            placeholder="Selecione"
                            name="funcConselhoUF"
                          >
                            <option></option>
                            <option value="SUS">SUS</option>
                            <option value="SMED">SMED</option>
                            <option value="Outro">Outro</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <label htmlFor="funcConselhoNumber">Número</label>
                        <div className="input-group mb-3">
                          <input
                            id="funcConselhoNumber"
                            className="form-control"
                            type="number"
                            name="funcConselhoNumber"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcDigitalCert"
                            className="labelInput"
                            title="Login exclusivo com Certificado Digital?"
                          >
                            Login exclusivo com Certificado Digital?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcDigitalCert"
                              id="funcDigitalCert"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcPasswordReset"
                            className="labelInput"
                            title="Permissão de Assinatura?"
                          >
                            Alterar senha no próximo acesso?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcPasswordReset"
                              id="funcPasswordReset"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcEstudante"
                            className="labelInput"
                            title="Estudante?"
                          >
                            Estudante?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcEstudante"
                              id="funcEstudante"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcPreceptor"
                            className="labelInput"
                            title="Preceptor?"
                          >
                            Preceptor?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcPreceptor"
                              id="funcPreceptor"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 my-1 form-group">
                        <div className="form-check">
                          <label
                            htmlFor="funcToten"
                            className="labelInput"
                            title="Acesso ao Toten?"
                          >
                            Acesso ao Toten?
                          </label>
                          <div className="input-group mb-3">
                            <input
                              name="funcToten"
                              id="funcToten"
                              className="form-check-input"
                              type="checkbox"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
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