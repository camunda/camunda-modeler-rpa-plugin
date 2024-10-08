/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import RPATemplate from './RPA.json';

function RobotFrameworkTemplateProvider(eventBus, elementTemplates) {
  const updateTemplates = () => {
    const allTemplates = elementTemplates.getAll();
    if (allTemplates.includes(RPATemplate)) {
      return;
    }

    elementTemplates.set([ ...allTemplates, RPATemplate ]);
  };

  updateTemplates();

  eventBus.on('elementTemplates.changed', updateTemplates);
}

RobotFrameworkTemplateProvider.$inject = [ 'eventBus', 'elementTemplates' ];


export default {
  __init__: [ 'robotFrameworkTemplateProvider' ],
  robotFrameworkTemplateProvider: [ 'type', RobotFrameworkTemplateProvider ]
};

