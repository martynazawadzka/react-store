import React from 'react';
import Container from '../shared/Container';
import Title from '../shared/PageTitle';
import Paragraph from './Paragraph';

const About = () => {
  return (
    <Container>
      <Title title="About" />
      <Paragraph
        text="Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam
       rutrum nibh consectetur purus tincidunt scelerisque. Etiam faucibus
       volutpat lectus, quis blandit diam consectetur ac. In hac habitasse
       platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi
       volutpat enim tincidunt fringilla. Etiam porttitor dolor eleifend felis
       consectetur facilisis. Ut pulvinar sollicitudin erat, nec malesuada nunc
       scelerisque nec. Aliquam vel dolor diam. Cras efficitur dignissim justo,
       ac tristique tellus pellentesque pharetra. Quisque pharetra lectus
       molestie, posuere lectus eget, tempor justo."
      />
      <Paragraph
        text="Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam
        rutrum nibh consectetur purus tincidunt scelerisque. Etiam faucibus
        volutpat lectus, quis blandit diam consectetur ac. In hac habitasse
        platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi
        volutpat enim tincidunt fringilla. Etiam porttitor dolor eleifend felis
        consectetur facilisis. Ut pulvinar sollicitudin erat, nec malesuada nunc
        scelerisque nec. Aliquam vel dolor diam. Cras efficitur dignissim justo,
        ac tristique tellus pellentesque pharetra. Quisque pharetra lectus
        molestie, posuere lectus eget, tempor justo."
      />
    </Container>
  );
};

export default About;
