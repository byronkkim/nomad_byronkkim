const loginForm = document.querySelector("#Login-Form");
const loginInput = document.querySelector("#Login-Form input");
const logoutForm = document.querySelector("#Logout-Form");
const logoutAA = document.querySelector("#Logout-Form aa");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 투두리스트 요소도 있다면 선택 (이미 선언되어 있다면 그대로 사용)
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

function showLogin() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  // 로그아웃 상태에서는 투두리스트 숨김
  if (todoForm && todoList) {
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
  }
}

function showLogout() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  // 로그인 상태에서는 투두리스트 보이기
  if (todoForm && todoList) {
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
  }
}

function onLogInSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value.trim();
  if (userName === "") {
    alert("이름을 입력해주세요요");
    return;
  }
  localStorage.setItem(USERNAME_KEY, userName);
  alert("Welcome, " + userName);
  logoutAA.innerText = `반갑습니다 ${userName}님`;
  showLogout();
}

function onLogOutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  showLogin();
}

// 이벤트 리스너를 항상 등록합니다.
loginForm.addEventListener("submit", onLogInSubmit);
logoutForm.addEventListener("submit", onLogOutSubmit);

// 페이지 로드 시 초기 상태 설정
const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName !== null) {
  logoutAA.innerText = `반갑습니다 ${savedUserName}님`;
  showLogout();
} else {
  showLogin();
}
