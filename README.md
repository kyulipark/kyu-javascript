🎉 add: 초기 값 세팅!
components폴더와 pages폴더를 만들어 필요한 파일들을 생성하였고,</br>
mock.js파일 안에 MOCK_DATA라는 데이터를 가져왔다.</br>
context폴더를 만들고 PokemonContext.sjx파일을 만들었다. </br>
(추후, 여기에 데이터를 담아 전역으로 관리하게 수정해야한다.)

shared폴더에 Router.jsx파일을 만든 후, </br>
`yarn add react-router-dom `을 설치했다.
```
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```
라우터 기본 세팅을 완료하였고, App.jsx에 import까지 하였다.
```
function App() {
  return (
    <PokemonContext.Provider value={{ MOCK_DATA }}>
      <Router />
    </PokemonContext.Provider>
  );
}
```

</br>
</br>

🎉 add: 디테일 페이지 추가 및 queryString 연결!

components에 디테일을 만들었었는데, 새로운 페이지로 만들어야한다는 것을 알고 pages 폴더에 detail.jsx페이지를 새로 생성했다.</br>
PokemonCard.jsx 파일에의 <Form>에 onClick으로 navigate훅을 사용해 디테일 페이지의 id를 쿼리스트링으로 연결했다.
```
    <CardStyle
      onClick={() => {
        navigate(`/detail?id=${data.id}`);
      }}
    >
```
Router.jsx에서는 
`<Route path="/detail" element={<Detail />} />` 라우터로 연결을 하였고, </br> 
위와같이 클릭이 일어날때에만 쿼리스트링으로 연결을 하였다.



</br>
</br>
🩹 fix: context 코드 수정!

styled 컴포넌트는 변수 바깥으로 빼야한다는걸 알았다, 안그럼 랜더링이 엄청 느리다.

```
const StyledBox = styled.div`
`
const Dashboard = () => {
<h1> Dashboard </h1>
return
}
```

`context.jsx`에서, 대쉬보드에서 사용할 selectedPokemon과 필요부분을 가져다 쓸 수 있는 `allPokemon`으로 `useState`를 두개를 만들었다.

```
const [allPokemon, setAllPokemon] = useState(MOCK_DATA);
const [selectedPokemon, setSelectedPokemon] = useState([]);
```
`context.jsx`에서 추가와 삭제 로직도 아래와 같이 넣어,

```
onst addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((p) => p.id !== pokemon.id)
    );
  };
```

 `PokemonContext.Provider`로 `{children}`에게 내려줄 수 있도록 했다.
```
   <PokemonContext.Provider
      value={{ selectedPokemon, allPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
```

`Dashboard.jsx`에서는 `selectedPokemon`을 가져다가 사용하였고, </br>
`PokemonCard.jsx`에서는 `addPokemon`, `removePokemon`을, </br> 
`PokemonList.jsx`에서는 `allPokemon`을 사용하였다. 

</br> 
이런 이슈가 있었어요‼️</br> 
 1️⃣ `PokemonCard.jsx`에서 '추가', '삭제' 버튼을 누르면 디테일페이지로 넘어간 후 돌아가기를 눌러야 추가, 삭제가되었는데 </br>
해당 부분은  `event.stopPropagation();` 로 막을 수 있었다. ` preventDefault()`와 아래와 같은 차이점이 있다. </br>
    - stopPropagation()는 클릭한 정보가 부모(큰 상자)에게 전달되지 않게 막는 것이고, </br>
    - preventDefault()는 원래 컴퓨터나 핸드폰이 하려고 했던 일을 막는것이였다.</br> 
    
 </br>
2️⃣ `Dashboard.jsx`와 `PokemonList.jsx` 에서 같은 <PokemonCard>를 사용하여 Dashboard에 추가가 안되었었는데, </br>
이 문제는 각 컴포넌트에 타입을 다르게 주어서 아래와 같이 해결하였다. </br>
 `Dashboard.jsx`에서는 <PokemonCard type={'selected'}>
`PokemonList.jsx`에서는  <PokemonCard type={'normal'}>로 주어서 구분을 지었다.



</br> 
</br> 
</br> 
💄 style: 스타일 컴포넌트로 css 작업 !!
스타일 컴포넌트를 깔고나서 자동완성이 안된다면 아래의 익스텐션을 깔자.
</br> 
<img width="873" alt="스크린샷 2024-08-26 오후 2 59 05" src="https://github.com/user-attachments/assets/d201646c-31c1-4762-96ac-7a1481f416b6">





</br> 
</br> 
이런 이슈가 있었어요‼️</br> 
</br> 
1️⃣ `PokemonCard.jsx`에서 세부 스타일을 만지다 보니 `Dashboard.jsx`에 추가될 때에 너비가 줄어는 이슈가 있었다,</br> 
해당 부분은 Card의 너비가 지정되지 않아서 그랬던 것이다. 세로 또는 가로가 마음대로 줄어든다면 너비나 높이를 지정해주자!
 
</br> 
</br> 
스타일 컴포넌트는 코드의 맨 아래에 작성하면 더 깔끔하다.
폰트와 모달도 반영하고 싶은데, 정보를 조금 더 찾아봐야할듯.
