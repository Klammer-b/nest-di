export const container = new Map();

export const resolveDependency = (dep) => {
  if (container.has(dep.name)) {
    return container.get(dep.name);
  } else {
    const depInstance = new dep();
    container.set(dep.name, depInstance);

    return depInstance;
  }
};
