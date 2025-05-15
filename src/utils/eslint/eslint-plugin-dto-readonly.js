// ESLint custom rule: require readonly on all properties in DTO type aliases
module.exports = {
  rules: {
    'require-readonly-in-dto-type-alias': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Require readonly modifier on all properties in DTO type aliases',
        },
        schema: [],
      },
      create(context) {
        return {
          TSTypeAliasDeclaration(node) {
            if (!/Dto$/.test(node.id.name)) return;
            if (!node.typeAnnotation || node.typeAnnotation.type !== 'TSTypeLiteral') return;
            const properties = node.typeAnnotation.members;
            properties.forEach(prop => {
              if (
                prop.type === 'TSPropertySignature' &&
                !prop.readonly &&
                prop.key &&
                prop.key.name // only named properties
              ) {
                context.report({
                  node: prop,
                  message: `Missing readonly modifier for the DTO property: ${prop.key.name}`,
                });
              }
            });
          },
        };
      },
    },
  },
};
