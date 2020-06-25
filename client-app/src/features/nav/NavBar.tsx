import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProp{
  OpenCreateForm:()=>void;
}

//react array functional component
export const NavBar :React.FC<IProp> = ({OpenCreateForm}) => {
  return (

    
    <Menu fixed="top" inverted >
      <Container>
            <Menu.Item header >
              
              <img src="/assets/venso.png" alt  ="logo" style={{marginRight: 10}} />
              Reactivities
              

            </Menu.Item>
            <Menu.Item name="Activities" />
            <Menu.Item >
              <Button onClick={OpenCreateForm} positive content="Create Activity" />
            </Menu.Item>
      </Container>
    
    </Menu>
  );
};
