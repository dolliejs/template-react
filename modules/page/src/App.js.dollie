
const <%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>Page = React.lazy(() => import('./pages/<%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>'));

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/<%= name.toLowerCase() %>" component={() => <<%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>Page />} />
              <Redirect from="/" to="/foo" />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default App;
