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


‼️ 추후 수정할 것,
Constext.jsx에 데이터를 담아 전역으로 불러올 수 있도록 수정해야할것같다!
