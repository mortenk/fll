<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<title>FLL</title>

	<STYLE TYPE="text/css">
	     H4 {page-break-before: always}
	</STYLE> 
</head>

<body>
Kjøreplan
<c:forEach var="team" items="${teams}">
	<H4>${team.key}</H4>
	<c:forEach var="plan" items="${team.value}">
		<c:out value="${plan.time} ${plan.activity}"/><br/>
	</c:forEach>
</c:forEach>

</body>
</html>