import emojis from 'emojis-list';

import { Center, ScrollView, Text } from '@mywallet/components';

const EmojiGallery = () => (
  // const emojis = require('emojis-list');
  <Center flex="1" bg="background-hovered">
    <ScrollView>
      <Text typography="Body1" my={4}>
        {emojis}
      </Text>
    </ScrollView>
  </Center>
);
export default EmojiGallery;
