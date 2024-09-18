import { ShortcutKeyModal } from "../components/chat";
import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";

const isApp = !!getClientConfig()?.isApp;

const cn = {
  WIP: "This feature is still under development……",
  Error: {
    Unauthorized: isApp
      ? "检测到无效 API Key，请前往[设置](/#/settings)页检查 API Key 是否配置正确。"
      : "访问密码不正确或为空，请前往[登录](/#/auth)页输入正确的访问密码，或者在[设置](/#/settings)页填入你自己的 OpenAI API Key。",
  },
  Auth: {
    Title: "Require Password",
    Tips: "The administrator has enabled password verification. Please fill in the access code below",
    SubTips: "Or enter your OpenAI or Google API key",
    Input: "Fill in the access code here",
    Confirm: "confirm",
    Later: "We'll talk about it later",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} conversations`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} conversations in total`,
    EditMessage: {
      Title: "Edit message records",
      Topic: {
        Title: "Chat topic",
        SubTitle: "Change the current chat topic",
      },
    },
    Actions: {
      ChatList: "View message list",
      CompressedHistory: "View compressed historical prompt",
      Export: "Export chat history",
      Copy: "copy",
      Stop: "stop",
      Retry: "retry",
      Pin: "pin",
      PinToastContent: "Fixed 1 conversation to preset prompt words",
      PinToastAction: "view",
      Delete: "delete",
      Edit: "edit",
      FullScreen: "fullscreen",
    },
    Commands: {
      new: "New Chat",
      newm: "Create a new chat from the mask",
      next: "Next chat",
      prev: "Previous Chat",
      clear: "Clear context",
      del: "Delete chat",
    },
    InputActions: {
      Stop: "Stop responding",
      ToBottom: "Roll to the latest",
      Theme: {
        auto: "Automatic Theme",
        light: "Bright color mode",
        dark: "Dark Mode",
      },
      Prompt: "Quick instructions",
      Masks: "All masks",
      Clear: "Clear chat",
      Settings: "Dialogue settings",
      UploadImage: "Pictures",
    },
    Rename: "Rename conversation",
    Typing: "Entering…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} send`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter wrap";
      }
      return inputHints + "，/ Trigger completion，: Trigger command";
    },
    Send: "Send",
    Config: {
      Reset: "erase memory",
      SaveAs: "Save as Mask",
    },
    IsContext: "Preset prompt words",
    ShortcutKey: {
      Title: "Keyboard Shortcuts",
      newChat: "Open a new chat",
      focusInput: "Focus on input box",
      copyLastMessage: "Copy the last reply",
      copyLastCode: "Copy the last code block",
      showShortcutKey: "Display shortcuts",
    },
  },
  Export: {
    Title: "Share chat history",
    Copy: "Copy all",
    Download: "Download file",
    Share: "Share to ShareGPT",
    MessageFromYou: "user",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "export format",
      SubTitle: "Can export Markdown text or PNG images",
    },
    IncludeContext: {
      Title: "Include mask context",
      SubTitle: "Whether to display mask context in the message",
    },
    Steps: {
      Select: "select",
      Preview: "Preview",
    },
    Image: {
      Toast: "Generating screenshots",
      Modal: "Long press or right-click to save image",
    },
    Artifacts: {
      Title: "Share page",
      Error: "Sharing failed",
    },
  },
  Select: {
    Search: "Search for messages",
    All: "Select all",
    Latest: "Recent posts",
    Clear: "Clear Selection",
  },
  Memory: {
    Title: "Historical Summary",
    EmptyContent: "The conversation content is too short, there is no need to summarize",
    Send: "Automatically compress chat records and send them as context",
    Copy: "Copy Summary",
    Reset: "[unused]",
    ResetConfirm: "Are you sure to clear the historical summary?",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Are you sure to delete the selected conversation?",
    DeleteToast: "Session deleted",
    Revert: "revoke",
  },
  Settings: {
    Title: "set up",
    SubTitle: "All settings options",
    ShowPassword: "show password",

    Danger: {
      Reset: {
        Title: "Reset All Settings ",
        SubTitle: "Reset all settings to default values",
        Action: "Reset immediately",
        Confirm: "Are you sure to reset all settings?",
      },
      Clear: {
        Title: "Clear all data",
        SubTitle: "Clear all chat and settings data",
        Action: "clear now",
        Confirm: "Are you sure to clear all chat and settings data?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "All languages",
    },
    Avatar: " profile picture",
    FontSize: {
      Title: "font size",
      SubTitle: "Font size of chat content",
    },
    FontFamily: {
      Title: "Chat font",
      SubTitle: "If the font of the chat content is left blank, the global default font will be applied",
      Placeholder: "Font Name",
    },
    InjectSystemPrompts: {
      Title: "Inject system level prompt information",
      SubTitle: "Force the addition of a simulated ChatGPT system prompt at the beginning of each requested message list",
    },
    InputTemplate: {
      Title: "User input preprocessing",
      SubTitle: "The latest message from the user will be filled into this template",
    },

    Update: {
      Version: (x: string) => `Current version:${x}`,
      IsLatest: "It is already the latest version",
      CheckUpdate: "Check for updates",
      IsChecking: "Checking for updates...",
      FoundUpdate: (x: string) => `New version discovered:${x}`,
      GoToUpdate: "Go to update",
    },
    SendKey: "send key",
    Theme: "theme",
    TightBorder: "Borderless mode",
    SendPreviewBubble: {
      Title: "Preview bubbles",
      SubTitle: "Preview Markdown content in the preview bubble",
    },
    AutoGenerateTitle: {
      Title: "Automatically generate titles",
      SubTitle: "Generate appropriate titles based on the conversation content",
    },
    Sync: {
      CloudState: "Cloud data",
      NotSyncYet: "I haven't synchronized it yet",
      Success: "Synchronization successful",
      Fail: "Synchronization failed",

      Config: {
        Modal: {
          Title: "Configure cloud synchronization",
          Check: "check availability",
        },
        SyncType: {
          Title: "Synchronization Type",
          SubTitle: "Choose your favorite synchronization server",
        },
        Proxy: {
          Title: "Enable proxy",
          SubTitle: "When synchronizing in the browser, the proxy must be enabled to avoid cross domain restrictions",
        },
        ProxyUrl: {
          Title: "Proxy address",
          SubTitle: "Only applicable to the cross domain proxy that comes with this project",
        },

        WebDav: {
          Endpoint: "WebDAV address",
          UserName: "user name",
          Password: "password",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Backup Name",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "local data",
      Overview: (overview: any) => {
        return `${overview.chat} conversations，${overview.message} messages，${overview.prompt} prompt words，${overview.mask} masks`;
      },
      ImportFailed: "Import failed",
    },
    Mask: {
      Splash: {
        Title: "Mask startup page",
        SubTitle: "When creating a new chat, display the mask startup page",
      },
      Builtin: {
        Title: "Hide built-in mask",
        SubTitle: "Hide built-in masks from all mask lists",
      },
    },
    Prompt: {
      Disable: {
        Title: "Disable prompt word auto completion",
        SubTitle: "Enter at the beginning of the input box / Can trigger auto completion",
      },
      List: "Custom prompt word list",
      ListCount: (builtin: number, custom: number) =>
        `built-in ${builtin} , defined ${custom} `,
      Edit: "edit",
      Modal: {
        Title: "List of prompt words",
        Add: "new-built",
        Search: "Search prompt words",
      },
      EditModal: {
        Title: "Edit prompt words",
      },
    },
    HistoryCount: {
      Title: "Number of historical messages attached",
      SubTitle: "Number of historical messages carried per request",
    },
    CompressThreshold: {
      Title: "Historical message length compression threshold",
      SubTitle: "When uncompressed historical messages exceed this value, compression will be performed",
    },

    Usage: {
      Title: "balance inquiry",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}，Total subscription amount $${total}`;
      },
      IsChecking: "Checking...",
      Check: "recheck",
      NoAccess: "Enter API Key or access password to view balance",
    },

    Access: {
      AccessCode: {
        Title: "access password",
        SubTitle: "Administrator has enabled encrypted access",
        Placeholder: "Please enter the access password",
      },
      CustomEndpoint: {
        Title: "custom interface",
        SubTitle: "Whether to use custom Azure or OpenAI services",
      },
      Provider: {
        Title: "Model service provider",
        SubTitle: "Switching between different service providers",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Using custom OpenAI keys to bypass password access restrictions",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Interface Address",
          SubTitle: "In addition to the default address, it must include http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Using custom Azure keys to bypass password access restrictions",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },

        ApiVerion: {
          Title: "Interface version (azure api version)",
          SubTitle: "Select the specified partial version",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Using custom Anthropic Key to bypass password access restrictions",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },

        ApiVerion: {
          Title: "Interface version (claude api version)",
          SubTitle: "Select a specific API version input",
        },
      },
      Google: {
        ApiKey: {
          Title: "API secret key",
          SubTitle: "Get your API key from Google AI",
          Placeholder: "Enter your Google AI Studio API key",
        },

        Endpoint: {
          Title: "Terminal address",
          SubTitle: "Example:",
        },

        ApiVersion: {
          Title: "API version (applicable only to Gemini pro)",
          SubTitle: "Choose a specific API version",
        },
        GoogleSafetySettings: {
          Title: "Google Security filtering level",
          SubTitle: "Set content filtering level",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Use custom Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "Use custom Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Customization to. env configuration is not supported",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Use custom Tencent Cloud API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "Use custom Tencent Cloud Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Customization to. env configuration is not supported",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Use custom ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Using custom Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Using the Custom Dark Side API for the Moon Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Interface key",
          SubTitle: "Use custom Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "ApiKey",
          SubTitle: "Obtained from iFlytek Spark Control Console APIKey",
          Placeholder: "APIKey",
        },
        ApiSecret: {
          Title: "ApiSecret",
          SubTitle: "Obtained from iFlytek Spark Control Console APISecret",
          Placeholder: "APISecret",
        },
        Endpoint: {
          Title: "Interface Address",
          SubTitle: "Example:",
        },
      },
      CustomModel: {
        Title: "Custom Model Name",
        SubTitle: "Add custom model options separated by commas in English",
      },
    },

    Model: "model",
    CompressModel: {
      Title: "compression model",
      SubTitle: "Model for compressing historical records",
    },
    Temperature: {
      Title: "randomness (temperature)",
      SubTitle: "The larger the value, the more random the response",
    },
    TopP: {
      Title: "Nuclear sampling (top_p)",
      SubTitle: "Similar to randomness, but do not change it together with randomness",
    },
    MaxTokens: {
      Title: "Single reply limit (max_tokens)",
      SubTitle: "The maximum number of tokens used for a single interaction",
    },
    PresencePenalty: {
      Title: "Topic freshness (presence_penalty)",
      SubTitle: "The larger the value, the more likely it is to expand into new topics",
    },
    FrequencyPenalty: {
      Title: "Frequency penalty degree (frequency_penalty)",
      SubTitle: "The larger the value, the more likely it is to reduce duplicate words",
    },
  },
  Store: {
    DefaultTopic: "New Chat",
    BotHello: "Is there anything I can help you with",
    Error: "Something went wrong, please try again later",
    Prompt: {
      History: (content: string) => "This is a summary of historical chats as a prelude:" + content,
      Topic:
        "Use four to five words to directly return the brief topic of this sentence, without explanation, punctuation, tone words, unnecessary text, or bolding. If there is no topic, please return directly to idle chat",
      Summarize:
        "Summarize the conversation briefly and use it as a prompt for subsequent context prompts, keeping it within 200 words",
    },
  },
  Copy: {
    Success: "Written to clipboard",
    Failed: "Copy failed, please grant clipboard permission",
  },
  Download: {
    Success: "The content has been downloaded to your directory.",
    Failed: "Download failed.",
  },
  Context: {
    Toast: (x: any) => `contain ${x} Pre set prompt words`,
    Edit: "Current conversation settings",
    Add: "Add a new conversation",
    Clear: "Context cleared",
    Revert: "Restore context",
  },

  Discovery: {
    Name: "discovery",
  },

  FineTuned: {
    Sysmessage: "You are an assistant",
  },
  SearchChat: {
    Name: "search for",
    Page: {
      Title: "Search chat history",
      Search: "Enter search keywords",
      NoResult: "No results found",
      NoData: "no data",
      Loading: "LOADING",

      SubTitle: (count: number) => `Search found ${count} results`,
    },
    Item: {
      View: "view",
    },
  },
  Plugin: {
    Name: "plug-in unit",
    Page: {
      Title: "plug-in unit",
      SubTitle: (count: number) => `${count} plug-in unit`,
      Search: "Search plugin",
      Create: "new-built",
      Find: "You can find excellent plugins on Github:",
    },
    Item: {
      Info: (count: number) => `${count} method`,
      View: "view",
      Edit: "edit",
      Delete: "delete",
      DeleteConfirm: "Are you sure to delete?",
    },
    Auth: {
      None: "No authorization required",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "custom",
      CustomHeader: "Custom parameter name",
      Token: "Token",
      Proxy: "Using a proxy",
      ProxyDescription: "Using a proxy to resolve CORS errors",
      Location: "position",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) => `Edit plugin ${readonly ? "（read only）" : ""}`,
      Download: "download",
      Auth: "Authorization method",
      Content: "OpenAPI Schema",
      Load: "Load from webpage",
      Method: "method",
      Error: "error",
    },
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Pre set character mask",
      SubTitle: (count: number) => `${count} Preset role definition`,
      Search: "Search for character masks",
      Create: "craete",
    },
    Item: {
      Info: (count: number) => `includs ${count} Preset dialogue`,
      Chat: "chat",
      View: "view",
      Edit: "edit",
      Delete: "delete",
      DeleteConfirm: "Are you sure to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit preset masks ${readonly ? "（read only）" : ""}`,
      Download: "Download presets",
      Clone: "Clone presets",
    },
    Config: {
      Avatar: "Character avatar",
      Name: "name",
      Sync: {
        Title: "Use Global Setting",
        SubTitle: "Is the current conversation using global model settings",
        Confirm: "The custom settings of the current conversation will be automatically overwritten. Are you sure to enable global settings?",
      },
      HideContext: {
        Title: "Hide preset conversations",
        SubTitle: "After hiding, the preset conversation will not appear in the chat interface",
      },
      Artifacts: {
        Title: "Enable Artifacts",
        SubTitle: "After activation, HTML pages can be directly rendered",
      },
      Share: {
        Title: "Share this mask",
        SubTitle: "Generate a direct link to this mask",
        Action: "copy link",
      },
    },
  },
  NewChat: {
    Return: "return",
    Skip: "Start directly",
    NotShow: "Do not show again",
    ConfirmNoShow: "Are you sure to disable? After disabling, it can be re enabled at any time in the settings.",
    Title: "Let's choose a mask",
    SubTitle: "Let's explore the secrets behind the mask together",
    More: "All",
  },

  URLCommand: {
    Code: "Detected that the link already contains an access code, should it be automatically filled in?",
    Settings: "Detected that the link contains pre made settings, should it be automatically filled in?",
  },

  UI: {
    Confirm: "confirm",
    Cancel: "cancel",
    Close: "close",
    Create: "create",
    Edit: "edit",
    Export: "export",
    Import: "import",
    Sync: "synchronous",
    Config: "configuration",
  },
  Exporter: {
    Description: {
      Title: "Only messages after clearing the context will be displayed",
    },
    Model: "model",
    Messages: "message",
    Topic: "topic",
    Time: "time",
  },
  SdPanel: {
    Prompt: "Screen prompt",
    NegativePrompt: "Negative prompt",
    PleaseInput: (name: string) => `Enter${name}`,
    AspectRatio: "aspect ratio",
    ImageStyle: "Image Style",
    OutFormat: "output format",
    AIModel: "AI model",
    ModelVersion: "model version",
    Submit: "Submit and generate",
    ParamIsRequired: (name: string) => `${name} Cannot be empty`,
    Styles: {
      D3Model: "3d model",
      AnalogFilm: "Simulated Movies",
      Anime: "Anime",
      Cinematic: "Movie Style",
      ComicBook: "comic books",
      DigitalArt: "Digital art",
      Enhance: "enhance",
      FantasyArt: "fantasy art",
      Isometric: "equiangular",
      LineArt: "line drawing",
      LowPoly: "Low polygon",
      ModelingCompound: "Modeling materials",
      NeonPunk: "Neon punk",
      Origami: "Origami",
      Photographic: "photography",
      PixelArt: "Pixel Art",
      TileTexture: "Maps",
    },
  },
  Sd: {
    SubTitle: (count: number) => ` ${count} Strip painting`,
    Actions: {
      Params: "View parameters",
      Copy: "Copy prompt words",
      Delete: "delete",
      Retry: "retry",
      ReturnHome: "homepage",
      History: "View history",
    },
    EmptyRecord: "No painting records available at the moment",
    Status: {
      Name: "state",
      Success: "success",
      Error: "fail",
      Wait: "Waiting",
      Running: "In operation",
    },
    Danger: {
      Delete: "Are you sure to delete?",
    },
    GenerateParams: "Generation Parameters",
    Detail: "details",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
