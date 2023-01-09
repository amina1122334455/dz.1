import { useDispatch, useSelector } from "react-redux";
import store from "./redux";
import { addUsers ,deleteUsers } from "./redux/reducers/users";
import "./sass/style.scss"

function App() {
  const dispath = useDispatch()
  const users = useSelector((store) => store.users.users)
  const usersCount = useSelector((store) => store.users.usersCount)
  return (
    <section className="main">
      <div className="container">
        <div className="main__card">
          <h2 className="main__title">Пользователи {usersCount}</h2>
        <ul className="main__ul">
          {users.map((item) => (
            <li className="main__ul-li" key={item.id}>{item.user}
            <button className="main__btn" type="button" onClick={() => dispath(deleteUsers(item.id))}>Убить</button>
            </li>
          ))}
        </ul>

        <form className="main__form" onSubmit={(e) => {
          e.preventDefault()
          dispath(addUsers(e.target[0].value))
          e.target[0].value = ''
        }}>
          <input className="main__inp" placeholder="Задачи" type="text" required/>
          <button className="main__btn-second" type="submit">Добавить</button>
        </form>
        </div>
        
      </div>
    </section>
  );
}

export default App;
