<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head><title>FLL</title></head>
<body>
<H4>Kjøreplan</H4>
<c:forEach var="item" items="${schedule}">
	<c:out value="${item.time} ${item.team1.name} ${item.team2.name}"/><br/>
</c:forEach>

</body>
</html>