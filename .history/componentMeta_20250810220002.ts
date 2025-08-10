import { ComponentMeta } from "@/types/component";

const meta: Record<string, ComponentMeta> = {
  Button: {
    description: "Interactive buttons for actions and navigation.",
    category: "Forms",
  },
  Card: {
    description: "Flexible container for displaying grouped content.",
    category: "Layout",
  },
  Modal: {
    description: "Dialog overlays for focused user interactions.",
    category: "Overlays",
  },
  Tabs: {
    description: "Organize content into multiple views using tabs.",
    category: "Navigation",
  },
  Accordion: {
    description: "Expand and collapse sections to show or hide content.",
    category: "Navigation",
  },
  // existing components...
  Alert: {
    description: "Displays important messages that require user attention.",
    category: "Feedback",
  },
};

export default meta;
