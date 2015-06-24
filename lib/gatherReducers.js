import objectAssign from 'object-assign';

export default function gatherReducers (modules) {
  let reducers = {};
	for (let moduleName of Object.keys(modules)) {
		objectAssign(reducers, modules[moduleName].reducers);
	}

	return reducers;
}
