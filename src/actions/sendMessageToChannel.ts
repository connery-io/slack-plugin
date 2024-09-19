import axios from 'axios';
import { ActionDefinition, ActionContext, OutputObject } from 'connery';

const actionDefinition: ActionDefinition = {
  key: 'sendMessageToChannel',
  name: 'Send message to channel',
  description: 'Send a message to the Slack channel.',
  type: 'create',
  inputParameters: [
    {
      key: 'incomingWebhookUrl',
      name: 'Incoming Webhook URL',
      description:
        'The URL of the Slack channel to send the message to. See https://api.slack.com/messaging/webhooks for more information.',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'message',
      name: 'Message',
      description: 'The message to send to the Slack channel.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [],
};
export default actionDefinition;

export async function handler({ input }: ActionContext): Promise<OutputObject> {
  await axios.post(input.incomingWebhookUrl, {
    text: input.message,
  });

  return {};
}
