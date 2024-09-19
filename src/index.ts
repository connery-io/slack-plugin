import { PluginDefinition, setupPluginServer } from 'connery';
import sendMessageToChannel from './actions/sendMessageToChannel.js';

const pluginDefinition: PluginDefinition = {
  name: 'Slack',
  description: 'Slack plugin for Connery.',
  actions: [sendMessageToChannel],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
