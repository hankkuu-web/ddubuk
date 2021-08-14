import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import WritingContent from './pages/WritingContent';
import Content from './pages/Content';
import ReviewDetail from './pages/ReviewDetail';
import WritingReview from './pages/WritingReview';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Layout homeLink={routes.home}>
              <PageTitle title="Home" />
              <Home 
                accent={Theme.accent}
                bgColor={Theme.bgColor}
              />
            </Layout>
          </Route>
          <Route path={`${routes.content}/:id`}>
            <Layout homeLink={routes.home}>
              <PageTitle title="Content" />
              <Content />
            </Layout>
          </Route>
          <Route path={routes.reviewDetail}>
            <Layout homeLink={routes.home}>
              <PageTitle title="ReviewDetail" />
              <ReviewDetail />
            </Layout>
          </Route>
          <Route path={routes.writingContent}>
            <Layout homeLink={routes.home}>
              <PageTitle title="WritingContent" />
              <WritingContent />
            </Layout>
          </Route>
          <Route path={routes.writingReview}>
            <Layout homeLink={routes.home}>
              <PageTitle title="WritingReview" />
              <WritingReview />
            </Layout>
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
