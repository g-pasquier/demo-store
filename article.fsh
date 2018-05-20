
jpa-new-entity --named Article;
jpa-new-field --named title --length 50 ;
jpa-new-field --named price --type java.lang.Float ;
jpa-new-field --named category --type org.cgi.training.javaee.model.Category --relationshipType Many-to-One;
