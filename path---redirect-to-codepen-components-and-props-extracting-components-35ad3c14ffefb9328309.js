webpackJsonp([0x94e447552ffe],{956:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"function formatDate(date) {\\n  return date.toLocaleDateString();\\n}\\n\\nfunction Comment(props) {\\n  return (\\n    <div className=\\"Comment\\">\\n      <div className=\\"UserInfo\\">\\n        <img\\n          className=\\"Avatar\\"\\n          src={props.author.avatarUrl}\\n          alt={props.author.name}\\n        />\\n        <div className=\\"UserInfo-name\\">\\n          {props.author.name}\\n        </div>\\n      </div>\\n      <div className=\\"Comment-text\\">{props.text}</div>\\n      <div className=\\"Comment-date\\">\\n        {formatDate(props.date)}\\n      </div>\\n    </div>\\n  );\\n}\\n\\nconst comment = {\\n  date: new Date(),\\n  text: \'I hope you enjoy learning React!\',\\n  author: {\\n    name: \'Hello Kitty\',\\n    avatarUrl: \'http://placekitten.com/g/64/64\',\\n  },\\n};\\nReactDOM.render(\\n  <Comment\\n    date={comment.date}\\n    text={comment.text}\\n    author={comment.author}\\n  />,\\n  document.getElementById(\'root\')\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-components-and-props-extracting-components-35ad3c14ffefb9328309.js.map