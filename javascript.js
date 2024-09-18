const modal = document.querySelector(".modalCadastrar");
const closeModalBtn = document.querySelector(".fecharModal");
const openModalBtnNovo = document.querySelector(".botaoNovoPlano");

openModalBtnNovo.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());

const modalEditar = document.querySelector(".modalEditar");
const closeModalBtn2 = document.querySelector(".fecharModal");
const openModalBtnNovo2 = document.querySelector(".botaoNovoPlano");

openModalBtnNovo2.addEventListener("click", () => modal.showModal());
closeModalBtn2.addEventListener("click", () => modal.close());
