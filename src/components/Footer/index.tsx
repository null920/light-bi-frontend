import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: '数字灯塔-BI',
          title: '数字灯塔-BI',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/null920',
          blankTarget: true,
        },
        {
          key: 'null920',
          title: 'null920',
          href: 'https://github.com/null920',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
