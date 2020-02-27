// <copyright file="IUserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using System.Linq;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;

    /// <summary>
    /// Manage all information about the user.
    /// </summary>
    public interface IUserDomain
    {
        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="authentication">The authentication informations.</param>
        /// <returns>The user or null if not authenticated.</returns>
        Task<AuthenticatedUser> AuthenticateAsync([NotNull] UserAuthentication authentication);
    }
}