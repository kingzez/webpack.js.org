import React from 'react';
import Url from 'url';
import './PageLinks.scss';
import icon from '../../assets/icon-print.svg';

const baseURL = 'https://github.com/docschina/webpack.js.org/edit/cn/';

export default ({
  page = {},
  ...props
}) => {
  const editLink = page.edit || Url.resolve(baseURL, page.path);

  // TODO: Make sure we add `repo` / `edit` and address `type` (above)
  return (
    <div className="page-links">
      { page.repo ? (
        <span>
          <a className="page-links__link" href={ page.repo }>
            Jump to Repository
          </a>

          <span className="page-links__gap">|</span>
        </span>
      ) : null }

      <a className="page-links__link" href={ editLink }>
        查看原文
        <i className="page-links__icon icon-edit" />
      </a>
      <a className="page-links__link" href={ editLink }>
        编辑此页
        <i className="page-links__icon icon-link" />
      </a>
      <span className="page-links__gap">|</span>
      <button className="page-links__link page-links__print as-link" onClick={_handlePrintClick} title="Print this page">
        打印文档
        <img src={icon} />
      </button>
    </div>
  );
};

function _handlePrintClick (e) {
  e.preventDefault();
  window.print();
}
