import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

//react array functional component
export const NavBar = () => {
  return (

    
    <Menu fixed="top" inverted >
      <Container>
            <Menu.Item header >
              
              <img src="/assets/venso.png" alt  ="logo" style={{marginRight: 10}} />
              Reactivities
              

            </Menu.Item>
            <Menu.Item name="Activities" />
            <Menu.Item >
              <Button positive content="Create Activity" />
            </Menu.Item>
      </Container>
    
    </Menu>
  );
};
