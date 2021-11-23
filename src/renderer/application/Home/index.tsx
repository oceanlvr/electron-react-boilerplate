import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';

function Home(props: RouteConfigComponentProps) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">app</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink activeClassName="selected" to={'/recommend'}>
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink activeClassName="selected" to={'/singers'}>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink activeClassName="selected" to={'/rank'}>
          <TabItem>
            {' '}
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      {route && renderRoutes(route.routes)}
    </div>
  );
}

export default Home;
