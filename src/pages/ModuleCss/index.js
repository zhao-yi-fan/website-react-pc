import React from 'react';
import modulesCss from './test.module.css'
console.log(modulesCss,'modulesCss===');

export default function ModulesCss () {

  return (
    <div className={modulesCss.aaa}>
    </div>
  )
}

