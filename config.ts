const styles = {
  modern: {
    color: {
      base: '#282933',
      window: '#312F3B',
      text: '#8D8D8D',
    },
  },
};

const Config = {
  styles: {...styles, default: styles.modern},
  dev: process.env.NODE_ENV !== 'production',
};

export default Config;
