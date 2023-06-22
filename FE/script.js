window.addEventListener("DOMContentLoaded", async (event) => {
  const data = await fetch("http://localhost:1337");
  const jsonparsed = await data.json(); //Object

  /**
   * JSON PARSED OUTPUT :
   * 
   * {
    "Project": {
        "Models": {
            "DataType": [
                {
                    "@_Name": "boolean"
                },
                {
                    "@_Name": "byte"
                },
                {
                    "@_Name": "char"
                },
                {
                    "@_Name": "double"
                },
                {
                    "@_Name": "float"
                },
                {
                    "@_Name": "int"
                },
                {
                    "@_Name": "long"
                },
                {
                    "@_Name": "short"
                },
                {
                    "@_Name": "void"
                },
                {
                    "@_Name": "string"
                },
                {
                    "@_Name": "timestamp"
                }
            ],
            "ModelRelationshipContainer": {
                "ModelChildren": {
                    "ModelRelationshipContainer": [
                        {
                            "ModelChildren": {
                                "Association": [
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "FSIRule"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "FuzzySet"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "describedBy"
                                            }
                                        },
                                        "@_Name": "describedBy"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "ContextVariable"
                                                    }
                                                }
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "FuzzySet"
                                                    }
                                                }
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "describedBy"
                                            }
                                        },
                                        "@_Name": "describedBy"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Situation"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "FSIRule"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "definedBy"
                                            }
                                        },
                                        "@_Name": "definedBy"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Transition"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Situation"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "makesTransition"
                                            }
                                        },
                                        "@_Name": "makesTransition"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "IoTDevice"
                                                    }
                                                }
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Entity"
                                                    }
                                                }
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "interactsWith"
                                            }
                                        },
                                        "@_Name": "interactsWith"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Entity"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Situation"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "involvedIn"
                                            }
                                        },
                                        "@_Name": "involvedIn"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Sensor"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Metadata"
                                                    }
                                                }
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "has"
                                            }
                                        },
                                        "@_Name": "has"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Sensor"
                                                    }
                                                }
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Observation"
                                                    }
                                                }
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "makes"
                                            }
                                        },
                                        "@_Name": "makes"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Observation"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Metadata"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "has"
                                            }
                                        },
                                        "@_Name": "has"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Observation"
                                                    }
                                                }
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "ContextVariable"
                                                    }
                                                }
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "representedBy"
                                            }
                                        },
                                        "@_Name": "representedBy"
                                    },
                                    {
                                        "FromEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Entity"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "ToEnd": {
                                            "AssociationEnd": {
                                                "Qualifier": {
                                                    "Qualifier": {
                                                        "@_Name": ""
                                                    }
                                                },
                                                "Type": {
                                                    "SysMLBlock": {
                                                        "@_Name": "Location"
                                                    }
                                                },
                                                "@_Name": ""
                                            }
                                        },
                                        "MasterView": {
                                            "Association": {
                                                "@_Name": "hasLocation"
                                            }
                                        },
                                        "@_Name": "hasLocation"
                                    }
                                ]
                            },
                            "@_Name": "Association"
                        },
                        {
                            "ModelChildren": {
                                "Generalization": [
                                    {
                                        "MasterView": {
                                            "Generalization": {
                                                "@_Name": "embeddedIn"
                                            }
                                        },
                                        "@_Name": "embeddedIn"
                                    },
                                    {
                                        "MasterView": {
                                            "Generalization": {
                                                "@_Name": "is"
                                            }
                                        },
                                        "@_Name": "is"
                                    }
                                ]
                            },
                            "@_Name": "Generalization"
                        },
                        {
                            "@_Name": "Dependency"
                        }
                    ]
                },
                "@_Name": "relationships"
            },
            "Package": [
                {
                    "MasterView": {
                        "Package": {
                            "@_Name": "FSIElement"
                        }
                    },
                    "ModelChildren": {
                        "SysMLBlock": [
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "triggerType"
                                        },
                                        {
                                            "@_Name": "runningTime"
                                        }
                                    ]
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Transition"
                                    }
                                },
                                "@_Name": "Transition"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "id"
                                        },
                                        {
                                            "@_Name": "Type"
                                        },
                                        {
                                            "@_Name": "LogicAggregator"
                                        }
                                    ]
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "FSIRule"
                                    }
                                },
                                "@_Name": "FSIRule"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "Type"
                                        },
                                        {
                                            "@_Name": "Value"
                                        }
                                    ]
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "FuzzySet"
                                    }
                                },
                                "@_Name": "FuzzySet"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "sit_ID"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "sit_name"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "prev_state"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "int"
                                                }
                                            },
                                            "@_Name": "threshold_time"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "int"
                                                }
                                            },
                                            "@_Name": "certainity"
                                        }
                                    ]
                                },
                                "FromSimpleRelationships": {
                                    "Anchor": {
                                        "@_Name": ""
                                    }
                                },
                                "ToSimpleRelationships": {
                                    "Dependency": {
                                        "@_Name": ""
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Situation"
                                    }
                                },
                                "@_Name": "Situation"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "varID"
                                        },
                                        {
                                            "@_Name": "varName"
                                        },
                                        {
                                            "@_Name": "description"
                                        },
                                        {
                                            "@_Name": "unit"
                                        },
                                        {
                                            "@_Name": "fuzziness"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "double"
                                                }
                                            },
                                            "@_Name": "weight"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "double"
                                                }
                                            },
                                            "@_Name": "type"
                                        }
                                    ]
                                },
                                "FromSimpleRelationships": {
                                    "Dependency": {
                                        "@_Name": ""
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "ContextVariable"
                                    }
                                },
                                "@_Name": "ContextVariable"
                            },
                            {
                                "Stereotypes": {
                                    "Stereotype": {
                                        "@_Name": "Context"
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Location"
                                    }
                                },
                                "@_Name": "Location"
                            }
                        ],
                        "ConstraintElement": {
                            "Specification": {
                                "CompositeValueSpecification": {
                                    "@_Name": ""
                                }
                            },
                            "ConstrainedElements": {
                                "SysMLBlock": [
                                    {
                                        "@_Name": "Situation"
                                    },
                                    {
                                        "@_Name": "Situation2"
                                    }
                                ]
                            },
                            "ToSimpleRelationships": {
                                "Anchor": {
                                    "@_Name": ""
                                }
                            },
                            "@_Name": ""
                        }
                    },
                    "@_Name": "FSIElement"
                },
                {
                    "MasterView": {
                        "Package": {
                            "@_Name": "IoTStack"
                        }
                    },
                    "ModelChildren": {
                        "SysMLBlock": [
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "timestamp: double"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "double"
                                                }
                                            },
                                            "@_Name": "phenomemonTime"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "long"
                                                }
                                            },
                                            "@_Name": "Values"
                                        }
                                    ]
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Observation"
                                    }
                                },
                                "@_Name": "Observation"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "senID"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "typeSensor"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "quantityKind"
                                        }
                                    ],
                                    "Operation": {
                                        "@_Name": "makesObservation"
                                    }
                                },
                                "ToSimpleRelationships": {
                                    "Generalization": {
                                        "@_Name": "embeddedIn"
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Sensor"
                                    }
                                },
                                "@_Name": "Sensor"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "entityID : string"
                                        },
                                        {
                                            "@_Name": "entityName : string"
                                        },
                                        {
                                            "@_Name": "entityDesc : string"
                                        },
                                        {
                                            "@_Name": "entityType : string"
                                        }
                                    ]
                                },
                                "FromSimpleRelationships": {
                                    "Generalization": {
                                        "@_Name": "is"
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Entity"
                                    }
                                },
                                "@_Name": "Entity"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "@_Name": "name : string"
                                        },
                                        {
                                            "@_Name": "value : string"
                                        },
                                        {
                                            "@_Name": "type : string"
                                        }
                                    ]
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "Metadata"
                                    }
                                },
                                "@_Name": "Metadata"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": [
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "devID"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "devType"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "deploymentLoc"
                                        },
                                        {
                                            "Type": {
                                                "DataType": {
                                                    "@_Name": "string"
                                                }
                                            },
                                            "@_Name": "typeComm"
                                        }
                                    ],
                                    "Operation": [
                                        {
                                            "@_Name": "getSensorData"
                                        },
                                        {
                                            "@_Name": "processSensorData"
                                        },
                                        {
                                            "@_Name": "publishData"
                                        }
                                    ]
                                },
                                "FromSimpleRelationships": {
                                    "Generalization": {
                                        "@_Name": "embeddedIn"
                                    }
                                },
                                "ToSimpleRelationships": {
                                    "Generalization": {
                                        "@_Name": "is"
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "IoTDevice"
                                    }
                                },
                                "@_Name": "IoTDevice"
                            },
                            {
                                "ModelChildren": {
                                    "Attribute": {
                                        "Type": {
                                            "DataType": {
                                                "@_Name": "string"
                                            }
                                        },
                                        "@_Name": "appName"
                                    }
                                },
                                "MasterView": {
                                    "SysMLBlock": {
                                        "@_Name": "IoTApplication"
                                    }
                                },
                                "@_Name": "IoTApplication"
                            }
                        ]
                    },
                    "@_Name": "IoTStack"
                },
                {
                    "MasterView": {
                        "Package": {
                            "@_Name": "FSIElement2"
                        }
                    },
                    "ModelChildren": {
                        "SysMLBlock": {
                            "ModelChildren": {
                                "Attribute": [
                                    {
                                        "@_Name": "Id"
                                    },
                                    {
                                        "@_Name": "Name"
                                    },
                                    {
                                        "@_Name": "Previous state"
                                    },
                                    {
                                        "Type": {
                                            "DataType": {
                                                "@_Name": "long"
                                            }
                                        },
                                        "@_Name": "threshold_time"
                                    }
                                ]
                            },
                            "FromSimpleRelationships": {
                                "Anchor": {
                                    "@_Name": ""
                                }
                            },
                            "MasterView": {
                                "SysMLBlock": {
                                    "@_Name": "Situation2"
                                }
                            },
                            "@_Name": "Situation2"
                        },
                        "ConstraintElement": {
                            "Specification": {
                                "CompositeValueSpecification": {
                                    "@_Name": ""
                                }
                            },
                            "ConstrainedElements": {
                                "SysMLBlock": {
                                    "@_Name": "Situation2"
                                }
                            },
                            "ToSimpleRelationships": {
                                "Anchor": {
                                    "@_Name": ""
                                }
                            },
                            "@_Name": ""
                        }
                    },
                    "@_Name": "FSIElement2"
                }
            ],
            "Stereotype": {
                "@_Name": "Context"
            }
        },
        "Diagrams": {
            "BlockDefinitionDiagram": {
                "Shapes": {
                    "Package": [
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "DiagramElementChildren": {
                                "SysMLBlock": [
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Observation"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Sensor"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Entity"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Metadata"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "IoTDevice"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "IoTApplication"
                                    }
                                ]
                            },
                            "@_Name": "IoTStack"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "DiagramElementChildren": {
                                "SysMLBlock": [
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Location"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Transition"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "Situation"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "ContextVariable"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "FSIRule"
                                    },
                                    {
                                        "ElementFont": {
                                            "@_Name": "Dialog"
                                        },
                                        "@_Name": "FuzzySet"
                                    }
                                ]
                            },
                            "@_Name": "FSIElement"
                        }
                    ]
                },
                "Connectors": {
                    "Association": [
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "describedBy"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "describedBy"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "definedBy"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "makesTransition"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "involvedIn"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "has"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "makes"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "has"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "representedBy"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "interactsWith"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "hasLocation"
                        }
                    ],
                    "Generalization": [
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "embeddedIn"
                        },
                        {
                            "ElementFont": {
                                "@_Name": "Dialog"
                            },
                            "@_Name": "is"
                        }
                    ],
                    "Dependency": {
                        "ElementFont": {
                            "@_Name": "Dialog"
                        }
                    }
                },
                "@_Name": "IoTSySML_DGM"
            }
        },
        "@_Name": "ModellingIoTEnv"
    }
} */

  /**Properties can be accessed by dot operator */

  console.log(jsonparsed.Project.Models.DataType); //Consecutive dot operators
});
