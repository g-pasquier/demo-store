#  #####################  #
#  Creates a new project named "store" #
#  #####################  #
project-new --named store --topLevelPackage org.cgi.training.javaee --type war --finalName store --version 1.0.0 ; 

# ############
# Setup the persistence unit in persistence.xml
# ############
jpa-setup --persistenceUnitName storePersistenceUnit ;

#  ########################  #
#  Creates the domain model  #
#  ########################  #
jpa-new-entity --named Category ;
jpa-new-field --named name --length 120 ;
constraint-add --onProperty name --constraint NotNull ;
constraint-add --onProperty name --constraint Size --max 120 ;

jpa-new-entity --named Article;
jpa-new-field --named title --length 50 ;
jpa-new-field --named price --type java.lang.Float ;
jpa-new-field --named category --type org.cgi.training.javaee.model.Category --relationshipType Many-to-One;

#  #############################  #
#  Generates JSF beans and pages  #
#  #############################  #
faces-setup --facesVersion 2.1 ;

scaffold-generate -–webRoot /admin --targets org.cgi.training.javaee.model.* ;

#  ########################  #
#  Generates REST endpoints  #
#  ########################  #
rest-generate-endpoints-from-entities --targets org.cgi.training.javaee.model.Category --contentType application/xml application/json ;
rest-generate-endpoints-from-entities --targets org.cgi.training.javaee.model.Article --contentType application/xml application/json ;

#  ########################  #
#  Generates Angularjs navigation  #
#  ########################  #
scaffold-generate --provider AngularJS --webRoot /ang --targets org.cgi.training.javaee.model.*

