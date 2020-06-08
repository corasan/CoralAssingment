import React, { forwardRef } from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Sheet from 'react-native-raw-bottom-sheet';

const ArticleWebview = forwardRef(({ uri }, ref) => {
  return (
    <Sheet
      height={Dimensions.get('window').height - 44}
      customStyles={{ container: { borderRadius: 10 } }}
      ref={ref}
      closeOnDragDown
      dragFromTop>
      <WebView source={{ uri }} style={styles.webview} />
    </Sheet>
  );
});

const styles = {
  webview: {
    flex: 1,
  },
};

export default ArticleWebview;
