const triggerList = [
  {
    id: 'whenACandidateMovedToThisStage',
    title: 'When a candidate is moved to this stage',
    description: '',
  },
  {
    id: 'whenAnInterviewIsScheduled',
    title: 'When an Interview is scheduled',
    description: '',
  },
  {
    id: 'whenAnInterviewIsCompleted',
    title: 'When an Interview is completed',
    description: '',
  },
  {
    id: 'whenAQuestionnaireIsSent',
    title: 'When a Questionnaire is sent',
    description: '',
  },
  {
    id: 'whenAQuestionnaireIsSubmitted',
    title: 'When a Questionnaire is submitted',
    description: '',
  },
  {
    id: 'whenAnEmailIsSent',
    title: 'When an Email is sent',
    description: '',
  },
  {
    id: 'whenAnEmailIsReceived',
    title: 'When an Email is received',
    description: '',
  },
  {
    id: 'whenAScorecardIsRequested',
    title: 'When a Scorecard is requested',
    description: '',
  },
  {
    id: 'whenAScorecardIsSubmitted',
    title: 'When a Scorecard is submitted',
    description: '',
  },
];

const conditionList = [
  {
    id: 'conditionYes',
    title: 'Yes',
    description: '',
  },
  {
    id: 'conditionNo',
    title: 'No',
    description: '',
  },
  {
    id: 'isInterviewScheduled',
    title: '',
    description: 'Is Interview scheduled ?',
  },
  {
    id: 'isDurationBeforeTheInterview',
    title: 'Is duration before the Interview < x hrs ?',
    description: '',
  },
  {
    id: 'isInterviewCompleted',
    title: 'Is Interview completed ?',
    description: '',
  },
  {
    id: 'isQuestionnaireSent',
    title: 'Is the Questionnaire sent ?',
    description: '',
  },
  {
    id: 'isQuestionnaireSubmitted',
    title: 'Is Questionnaire submitted ?',
    description: '',
  },
  {
    id: 'isEmailSent',
    title: 'Is email sent ?',
    description: '',
  },
  {
    id: 'isEmailReceived',
    title: 'Is email received ?',
    description: '',
  },
  {
    id: 'isScorecardRequested',
    title: 'Is the scorecard requested ?',
    description: '',
  },
  {
    id: 'isScorecardSubmitted',
    title: 'Is the scorecard submitted ?',
    description: '',
  },
  {
    id: 'isCandidateOverallScore',
    title: `Is the candidate's overall score < x ?`,
    description: '',
  },
  {
    id: 'isCandidateStageScore',
    title: `Is the candidate's stage score < x ?`,
    description: '',
  },
];

const actionList = [
  {
    id: 'sendAnEmail',
    title: 'Send an Email',
    description: '',
  },
  {
    id: 'sendQuestionnaire',
    title: 'Send Questionnaire',
    description: '',
  },
  {
    id: 'moveToNextStage',
    title: 'Move to next stage',
    description: '',
  },
  {
    id: 'archiveCandidate',
    title: 'Archive Candidate',
    description: '',
  },
  {
    id: 'postComment',
    title: 'Post a comment',
    description: '',
  },
  {
    id: 'sendInAppNotification',
    title: 'Send In App Notification',
    description: '',
  },
  {
    id: 'sendTextSms',
    title: 'Send Text SMS',
    description: '',
  },
];

const workflowPropertiesConfig = {
  whenACandidateMovedToThisStage: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAnInterviewIsScheduled: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAnInterviewIsCompleted: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAQuestionnaireIsSent: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAQuestionnaireIsSubmitted: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAnEmailIsSent: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAnEmailIsReceived: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAScorecardIsRequested: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  whenAScorecardIsSubmitted: {
    type: 'trigger',
    canbeFirstBlock: true,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  sendAnEmail: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  sendQuestionnaire: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  moveToNextStage: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  archiveCandidate: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  postComment: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  sendInAppNotification: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  sendTextSms: {
    type: 'action',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isInterviewScheduled: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isDurationBeforeTheInterview: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isInterviewCompleted: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isQuestionnaireSent: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isQuestionnaireSubmitted: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isEmailSent: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isEmailReceived: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isScorecardRequested: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isScorecardSubmitted: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isCandidateOverallScore: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  isCandidateStageScore: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: true,
    childBlocksAllowed: [],
    properties: [
        {
            label: '',
            propertyId: '',
            required: true,
            fieldName: '',
        }
    ]
  },
  conditionYes: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
  conditionNo: {
    type: 'condition',
    canbeFirstBlock: false,
    parentBlocksAllowed: [],
    hasProperties: false,
    childBlocksAllowed: [],
  },
};

export { triggerList, actionList, conditionList, workflowPropertiesConfig };
