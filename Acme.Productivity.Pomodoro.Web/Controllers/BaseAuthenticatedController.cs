// <copyright file="BaseAuthenticatedController.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web.Controllers
{
    using System;
    using System.Linq;
    using System.Security.Claims;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Base controller for all authenticated controllers.
    /// </summary>
    [Authorize]
    [ApiController]
    public abstract class BaseAuthenticatedController : ControllerBase
    {
        /// <summary>
        /// Gets the current user ID.
        /// </summary>
        public Guid UserId
        {
            get
            {
                var userId = this.User.FindFirst(ClaimTypes.Sid);
                return Guid.TryParse(userId?.Value, out var guid) ? guid : default;
            }
        }
    }
}