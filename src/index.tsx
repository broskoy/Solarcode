import { render } from 'solid-js/web'
import { Router, Route, Navigate } from '@solidjs/router';
import Home from './home/Home';
import Placeholder from './placeholder/Placeholder';
import './index.css'
import App from './App';
import NotFound from './NotFound';

const root = document.getElementById('root')

render(() => (
  <>
    <Router root={App}>
      <Route path="/" component={() => <Navigate href="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/placeholder" component={Placeholder} />
      <Route path="/about" component={Placeholder} />
      <Route path="/support" component={Placeholder} />
      <Route path="*404" component={NotFound} />
    </Router>
  </>
), root!);