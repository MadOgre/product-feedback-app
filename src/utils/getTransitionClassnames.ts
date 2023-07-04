interface TransitionClassnames {
  enter: string;
  enterActive: string;
  exit: string;
  exitActive: string;
}

/**
 * Accepts the root part of the name and generates object that could be passed to classnames on CSSTransition
 * @param rootName the root part of the name
 * @returns object with {enter:... enterActive:... etc.}
 */
export const getTransitionClassnames = (rootName: string, classes: Readonly<Record<string, string>>): TransitionClassnames => ({
  enter: classes[`${rootName}Enter`],
  enterActive: classes[`${rootName}EnterActive`],
  exit: classes[`${rootName}Exit`],
  exitActive: classes[`${rootName}ExitActive`],
});
